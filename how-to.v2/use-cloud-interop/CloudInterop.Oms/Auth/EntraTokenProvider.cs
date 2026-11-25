using System;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Identity.Client;
using Microsoft.Identity.Client.Broker;
using Newtonsoft.Json.Linq;

namespace CloudInteropOms.Auth
{
    /// <summary>
    /// The claims HERE needs to validate the token: send them to HERE in exchange for an authenticationId.
    /// </summary>
    public sealed class EntraTokenDetails
    {
        public EntraTokenDetails(string? issuer, string? audience, string? tenantId)
        {
            Issuer = issuer;
            Audience = audience;
            TenantId = tenantId;
        }

        public string? Issuer { get; }

        public string? Audience { get; }

        public string? TenantId { get; }

        public string JwksUri => $"https://login.microsoftonline.com/{TenantId ?? "organizations"}/discovery/v2.0/keys";

        public override string ToString()
        {
            return $"iss={Issuer}, aud={Audience}, tid={TenantId}, jwks_uri={JwksUri}";
        }
    }

    /// <summary>
    /// Signs in to Microsoft Entra ID with MSAL.NET and hands the raw ID token to Cloud Interop.
    /// </summary>
    /// <remarks>
    /// The Cloud Interop <c>jwtRequestCallback</c> is synchronous and is called for every request, so the
    /// token is acquired up front, kept in memory and refreshed silently in the background shortly before it
    /// expires. <see cref="GetToken"/> only ever returns the cached value.
    /// </remarks>
    public sealed class EntraTokenProvider : IDisposable
    {
        private static readonly TimeSpan RefreshBeforeExpiry = TimeSpan.FromMinutes(5);
        private static readonly TimeSpan FallbackLifetime = TimeSpan.FromHours(1);

        // Checked against the wall clock rather than waiting on one long timer, because a timer can fire late
        // or not at all while the machine sleeps, leaving an expired token in use after it wakes.
        private static readonly TimeSpan CheckInterval = TimeSpan.FromSeconds(30);

        private readonly EntraOptions _options;
        private readonly string[] _scopes;
        private readonly IPublicClientApplication _msal;
        private readonly Action<string> _log;
        private readonly object _gate = new object();
        private volatile string _idToken = "";
        private IAccount? _account;
        private DateTimeOffset? _expiresAt;
        private Timer? _checkTimer;
        private Task? _refreshing;
        private bool _refreshFailed;
        private bool _expiryReported;
        private int _generation;
        private bool _disposed;

        public EntraTokenProvider(EntraOptions options, Action<string> log)
        {
            _options = options;
            _log = log;
            _scopes = options.Scopes.ToArray();

            var tenant = AppSettings.IsConfigured(options.TenantId) ? options.TenantId : "organizations";
            var builder = PublicClientApplicationBuilder
                .Create(options.ClientId)
                .WithAuthority($"https://login.microsoftonline.com/{tenant}");

            // The system browser signs in through a loopback redirect, so the app registration needs a
            // "Mobile and desktop applications" redirect uri of http://localhost. WAM uses its own
            // ms-appx-web://microsoft.aad.brokerplugin/{clientId} redirect uri.
            builder = options.UseBroker
                ? builder.WithBroker(new BrokerOptions(BrokerOptions.OperatingSystems.Windows))
                : builder.WithRedirectUri("http://localhost");

            _msal = builder.Build();
        }

        public bool IsSignedIn => _idToken.Length > 0;

        public bool IsTokenExpired
        {
            get
            {
                lock (_gate)
                {
                    return _expiresAt.HasValue && DateTimeOffset.UtcNow >= _expiresAt.Value;
                }
            }
        }

        public string? AccountName
        {
            get
            {
                lock (_gate)
                {
                    return _account?.Username;
                }
            }
        }

        public EntraTokenDetails? TokenDetails { get; private set; }

        /// <summary>
        /// Raised on a background thread when a token is refreshed or expires after a failed refresh.
        /// </summary>
        public event EventHandler? TokenStateChanged;

        /// <summary>
        /// The <c>jwtRequestCallback</c> for Cloud Interop: the cached raw ID token (header.payload.signature).
        /// </summary>
        public string GetToken()
        {
            return _idToken;
        }

        /// <summary>
        /// Refresh the token now if it is due, so that a request made right after the machine wakes does not
        /// carry an expired token. A failed refresh is logged rather than thrown.
        /// </summary>
        public Task EnsureFreshTokenAsync()
        {
            lock (_gate)
            {
                return IsRefreshDue() ? StartRefresh() : _refreshing ?? Task.CompletedTask;
            }
        }

        /// <summary>
        /// Sign in, silently if MSAL already has an account (or WAM has a Windows account), otherwise
        /// interactively in the system browser or the WAM dialog.
        /// </summary>
        /// <param name="parentWindow">The window handle to parent the WAM dialog to.</param>
        public async Task SignInAsync(IntPtr parentWindow, CancellationToken cancellationToken = default)
        {
            int generation;
            bool forceRefresh;
            lock (_gate)
            {
                if (_disposed)
                {
                    throw new ObjectDisposedException(nameof(EntraTokenProvider));
                }

                generation = _generation;
                forceRefresh = _expiresAt.HasValue && DateTimeOffset.UtcNow >= _expiresAt.Value;
            }

            AuthenticationResult result;
            try
            {
                var account = (await _msal.GetAccountsAsync().ConfigureAwait(false)).FirstOrDefault()
                    ?? (_options.UseBroker ? PublicClientApplication.OperatingSystemAccount : null);

                result = await _msal.AcquireTokenSilent(_scopes, account)
                    .WithForceRefresh(forceRefresh)
                    .ExecuteAsync(cancellationToken)
                    .ConfigureAwait(false);
            }
            catch (MsalUiRequiredException)
            {
                var interactive = _msal.AcquireTokenInteractive(_scopes).WithParentActivityOrWindow(parentWindow);

                if (AppSettings.IsConfigured(_options.LoginHint))
                {
                    interactive = interactive.WithLoginHint(_options.LoginHint);
                }

                if (!_options.UseBroker)
                {
                    // .NET Framework defaults to an embedded web view, .NET to the system browser.
                    interactive = interactive.WithUseEmbeddedWebView(false);
                }

                result = await interactive.ExecuteAsync(cancellationToken).ConfigureAwait(false);
            }

            CacheToken(result, generation);
        }

        /// <summary>
        /// Forget the account and the token, so that a different account can be used.
        /// </summary>
        public async Task SignOutAsync()
        {
            lock (_gate)
            {
                ClearToken();
            }

            foreach (var account in await _msal.GetAccountsAsync().ConfigureAwait(false))
            {
                await _msal.RemoveAsync(account).ConfigureAwait(false);
            }
        }

        public void Dispose()
        {
            lock (_gate)
            {
                _disposed = true;
                ClearToken();
            }
        }

        private void ClearToken()
        {
            _generation++;
            _checkTimer?.Dispose();
            _checkTimer = null;
            _refreshing = null;
            _refreshFailed = false;
            _idToken = "";
            _account = null;
            _expiresAt = null;
            TokenDetails = null;
        }

        private void CacheToken(AuthenticationResult result, int generation)
        {
            if (string.IsNullOrEmpty(result.IdToken))
            {
                throw new InvalidOperationException("MSAL returned an empty ID token. Ensure openid is among the scopes.");
            }

            var claims = ReadJwtPayload(result.IdToken);
            var details = new EntraTokenDetails(
                claims.Value<string>("iss"),
                claims.Value<string>("aud"),
                claims.Value<string>("tid"));
            var expiresAtUnixSeconds = claims.Value<long?>("exp");
            var expiresAt = expiresAtUnixSeconds.HasValue
                ? DateTimeOffset.FromUnixTimeSeconds(expiresAtUnixSeconds.Value)
                : DateTimeOffset.UtcNow + FallbackLifetime;

            lock (_gate)
            {
                if (_disposed || generation != _generation)
                {
                    return;
                }

                _idToken = result.IdToken;
                _account = result.Account;
                _expiresAt = expiresAt;
                _expiryReported = false;
                TokenDetails = details;
                _checkTimer ??= new Timer(_ => OnCheckTimer(), null, CheckInterval, CheckInterval);
            }

            _log($"Entra ID token acquired for {result.Account?.Username}, expires {expiresAt.ToLocalTime():HH:mm:ss}: {details}");
            TokenStateChanged?.Invoke(this, EventArgs.Empty);
        }

        private void OnCheckTimer()
        {
            bool reportExpiry;
            lock (_gate)
            {
                if (_disposed || _account == null)
                {
                    return;
                }

                if (IsRefreshDue())
                {
                    StartRefresh();
                }

                reportExpiry = !_expiryReported && _expiresAt.HasValue && DateTimeOffset.UtcNow >= _expiresAt.Value;
                _expiryReported |= reportExpiry;
            }

            if (reportExpiry)
            {
                TokenStateChanged?.Invoke(this, EventArgs.Empty);
            }
        }

        // Callers hold _gate.
        private bool IsRefreshDue()
        {
            return !_disposed
                && _account != null
                && _refreshing == null
                && _expiresAt.HasValue
                && DateTimeOffset.UtcNow >= _expiresAt.Value - RefreshBeforeExpiry;
        }

        // Callers hold _gate.
        private Task StartRefresh()
        {
            return _refreshing = RefreshAsync(_generation, _account!);
        }

        /// <summary>
        /// Refresh silently only: if it fails the previous token is kept, the failure is logged once and the
        /// check timer tries again. The user can also sign in again.
        /// </summary>
        private async Task RefreshAsync(int generation, IAccount account)
        {
            // Let StartRefresh record this task before it can complete.
            await Task.Yield();
            try
            {
                var result = await _msal.AcquireTokenSilent(_scopes, account)
                    .WithForceRefresh(true)
                    .ExecuteAsync()
                    .ConfigureAwait(false);

                CacheToken(result, generation);
                lock (_gate)
                {
                    _refreshFailed = false;
                }
            }
            catch (Exception ex)
            {
                bool firstFailure;
                lock (_gate)
                {
                    firstFailure = !_refreshFailed && generation == _generation;
                    _refreshFailed |= firstFailure;
                }

                if (firstFailure)
                {
                    _log($"Failed to refresh the Entra ID token, will keep retrying: {ex.Message}");
                }
            }
            finally
            {
                lock (_gate)
                {
                    if (generation == _generation)
                    {
                        _refreshing = null;
                    }
                }
            }
        }

        private static JObject ReadJwtPayload(string jwt)
        {
            var parts = jwt.Split('.');
            if (parts.Length < 2)
            {
                return new JObject();
            }

            var payload = parts[1].Replace('-', '+').Replace('_', '/');
            payload = payload.PadRight(payload.Length + ((4 - payload.Length % 4) % 4), '=');
            return JObject.Parse(Encoding.UTF8.GetString(Convert.FromBase64String(payload)));
        }
    }
}
