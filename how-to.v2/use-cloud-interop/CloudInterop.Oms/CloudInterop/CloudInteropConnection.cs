using System;
using System.Threading;
using System.Threading.Tasks;
using OpenFin;

namespace CloudInteropOms.CloudInterop
{
    public enum ConnectionStatus
    {
        Disconnected,
        Connecting,
        Connected,
        Reconnecting,
        SessionExpired
    }

    public sealed class ConnectionStatusChangedEventArgs : EventArgs
    {
        public ConnectionStatusChangedEventArgs(ConnectionStatus status, string message)
        {
            Status = status;
            Message = message;
        }

        public ConnectionStatus Status { get; }

        public string Message { get; }
    }

    /// <summary>
    /// Owns the <see cref="CloudInteropAPI"/> client: creating it, connecting with basic or JWT
    /// authentication, disconnecting and reporting the state of the connection.
    /// </summary>
    /// <remarks>
    /// Events are raised on a background thread, so UI code needs to marshal them to the UI thread.
    /// </remarks>
    public sealed class CloudInteropConnection : IDisposable
    {
        private readonly string _platformId;
        private readonly string _sourceId;

        public CloudInteropConnection(string url, string platformId, string sourceId, int reconnectRetryLimit = 30)
        {
            _platformId = platformId;
            _sourceId = sourceId;

            Api = new CloudInteropAPI(new CloudInteropSettings(url, reconnectRetryLimit));

            Api.Reconnecting += (_, attempt) =>
                OnStatusChanged(ConnectionStatus.Reconnecting, $"Connection lost, reconnecting (attempt {attempt})");
            Api.Reconnected += (_, _) =>
                OnStatusChanged(ConnectionStatus.Connected, "Reconnected");
            Api.Disconnected += (_, _) =>
                OnStatusChanged(ConnectionStatus.Disconnected, "Disconnected");
            Api.SessionExpired += (_, _) =>
                OnStatusChanged(ConnectionStatus.SessionExpired, "The session expired, connect again to continue");
            Api.Error += (_, error) => Error?.Invoke(this, error);
        }

        /// <summary>
        /// The underlying client, shared with <see cref="ContextChannel"/> and <see cref="IntentService"/>.
        /// </summary>
        public CloudInteropAPI Api { get; }

        public string SourceId => _sourceId;

        /// <summary>
        /// The id of this session once connected. Other sessions see it as <c>Source.SessionId</c>.
        /// </summary>
        public string? SessionId => Api.SessionDetails?.SessionId;

        public bool IsConnected => Api.SessionDetails != null;

        public event EventHandler<ConnectionStatusChangedEventArgs>? StatusChanged;

        public event EventHandler<Exception>? Error;

        /// <summary>
        /// Connect with the username and password HERE has issued to you.
        /// </summary>
        public Task ConnectWithBasicAuthAsync(string username, string password, CancellationToken cancellationToken = default)
        {
            var basicAuth = new ConnectParameters.BasicAuthenticationParameters(username, password);
            return ConnectAsync(new ConnectParameters(_platformId, _sourceId, basicAuth), cancellationToken);
        }

        /// <summary>
        /// Connect with a JWT. <paramref name="getToken"/> is called synchronously for every request
        /// the client makes, so it should return a cached token rather than fetch a new one.
        /// </summary>
        public Task ConnectWithJwtAsync(Func<string> getToken, string authenticationId, CancellationToken cancellationToken = default)
        {
            var jwtAuth = new ConnectParameters.JwtAuthenticationParameters(getToken, authenticationId);
            return ConnectAsync(new ConnectParameters(_platformId, _sourceId, jwtAuth), cancellationToken);
        }

        public async Task DisconnectAsync()
        {
            if (IsConnected)
            {
                await Api.DisconnectAsync().ConfigureAwait(false);
            }
        }

        public void Dispose()
        {
            Api.Dispose();
        }

        private async Task ConnectAsync(ConnectParameters parameters, CancellationToken cancellationToken)
        {
            await DisconnectAsync().ConfigureAwait(false);

            OnStatusChanged(ConnectionStatus.Connecting, $"Connecting as {parameters.SourceId} on platform {parameters.PlatformId}");
            try
            {
                await Api.ConnectAsync(parameters, cancellationToken).ConfigureAwait(false);
            }
            catch
            {
                OnStatusChanged(ConnectionStatus.Disconnected, "Failed to connect");
                throw;
            }

            OnStatusChanged(ConnectionStatus.Connected, $"Connected, session {SessionId}");
        }

        private void OnStatusChanged(ConnectionStatus status, string message)
        {
            StatusChanged?.Invoke(this, new ConnectionStatusChangedEventArgs(status, message));
        }
    }
}
