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
    /// token is acquired up front, kept in memory and refreshed silently in the background at 80% of its
    /// lifetime. <see cref="GetToken"/> only ever returns the cached value.
    /// </remarks>
    public sealed class EntraTokenProvider : IDisposable
    {
        private const double RefreshAtLifetimeRatio = 0.8;
        private static readonly TimeSpan FallbackLifetime = TimeSpan.FromHours(1);

        private readonly EntraOptions _options;
        private readonly string[] _scopes;
        private readonly IPublicClientApplication _msal;
        private readonly Action<string> _log;
        private volatile string _idToken = "";
        private IAccount? _account;
        private Timer? _refreshTimer;

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

        public string? AccountName => _account?.Username;

        public EntraTokenDetails? TokenDetails { get; private set; }

        /// <summary>
        /// The <c>jwtRequestCallback</c> for Cloud Interop: the cached raw ID token (header.payload.signature).
        /// </summary>
        public string GetToken()
        {
            return _idToken;
        }

        /// <summary>
        /// Sign in, silently if MSAL already has an account (or WAM has a Windows account), otherwise
        /// interactively in the system browser or the WAM dialog.
        /// </summary>
        /// <param name="parentWindow">The window handle to parent the WAM dialog to.</param>
        public async Task SignInAsync(IntPtr parentWindow, CancellationToken cancellationToken = default)
        {
            AuthenticationResult result;
            try
            {
                var account = (await _msal.GetAccountsAsync().ConfigureAwait(false)).FirstOrDefault()
                    ?? (_options.UseBroker ? PublicClientApplication.OperatingSystemAccount : null);

                result = await _msal.AcquireTokenSilent(_scopes, account).ExecuteAsync(cancellationToken).ConfigureAwait(false);
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

            CacheToken(result);
        }

        /// <summary>
        /// Forget the account and the token, so that a different account can be used.
        /// </summary>
        public async Task SignOutAsync()
        {
            StopRefreshTimer();
            _idToken = "";
            TokenDetails = null;

            foreach (var account in await _msal.GetAccountsAsync().ConfigureAwait(false))
            {
                await _msal.RemoveAsync(account).ConfigureAwait(false);
            }

            _account = null;
        }

        public void Dispose()
        {
            StopRefreshTimer();
        }

        private void CacheToken(AuthenticationResult result)
        {
            if (string.IsNullOrEmpty(result.IdToken))
            {
                throw new InvalidOperationException("MSAL returned an empty ID token. Ensure openid is among the scopes.");
            }

            _idToken = result.IdToken;
            _account = result.Account;

            var claims = ReadJwtPayload(result.IdToken);
            TokenDetails = new EntraTokenDetails(
                claims.Value<string>("iss"),
                claims.Value<string>("aud"),
                claims.Value<string>("tid"));

            _log($"Entra ID token acquired for {_account?.Username}: {TokenDetails}");

            ScheduleRefresh(claims.Value<long?>("exp"));
        }

        private void ScheduleRefresh(long? expiresAtUnixSeconds)
        {
            var lifetime = expiresAtUnixSeconds.HasValue
                ? DateTimeOffset.FromUnixTimeSeconds(expiresAtUnixSeconds.Value) - DateTimeOffset.UtcNow
                : FallbackLifetime;

            var dueIn = TimeSpan.FromMilliseconds(Math.Max(lifetime.TotalMilliseconds * RefreshAtLifetimeRatio, 0));

            StopRefreshTimer();
            _refreshTimer = new Timer(state => { _ = RefreshAsync(); }, null, dueIn, Timeout.InfiniteTimeSpan);
        }

        /// <summary>
        /// Refresh silently only: if it fails the previous token is kept and the failure is logged, and
        /// the user can sign in again.
        /// </summary>
        private async Task RefreshAsync()
        {
            try
            {
                var result = await _msal.AcquireTokenSilent(_scopes, _account)
                    .WithForceRefresh(true)
                    .ExecuteAsync()
                    .ConfigureAwait(false);

                CacheToken(result);
            }
            catch (Exception ex)
            {
                _log($"Failed to refresh the Entra ID token, keeping the previous token: {ex.Message}");
            }
        }

        private void StopRefreshTimer()
        {
            _refreshTimer?.Dispose();
            _refreshTimer = null;
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
