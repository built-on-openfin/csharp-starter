using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using OpenFin;

namespace CloudInteropOms.CloudInterop
{
    /// <summary>
    /// Raises FDC3 intents across Cloud Interop and handles the intents this app supports.
    /// </summary>
    /// <remarks>
    /// Raising an intent is a three step conversation with the other sessions on the platform:
    /// <list type="number">
    /// <item><b>Discover:</b> <see cref="CloudInteropAPI.StartIntentDiscoveryAsync"/> asks the other sessions
    /// which apps handle the intent. Each one answers in its <see cref="CloudInteropAPI.ReportIntents"/> handler,
    /// and the answers arrive together in the <see cref="CloudInteropAPI.AggregateIntentDetails"/> event.</item>
    /// <item><b>Raise:</b> <see cref="CloudInteropAPI.RaiseIntentAsync"/> sends the intent to one app, whose
    /// session receives the <see cref="CloudInteropAPI.RaiseIntent"/> event.</item>
    /// <item><b>Result:</b> that session replies with <see cref="CloudInteropAPI.SendIntentResultAsync"/>, and the
    /// raising session receives the <see cref="CloudInteropAPI.IntentResult"/> event.</item>
    /// </list>
    /// </remarks>
    public sealed class IntentService : IDisposable
    {
        private const int DiscoveryTimeoutMs = 3000;
        private static readonly TimeSpan ResultTimeout = TimeSpan.FromSeconds(15);

        private readonly CloudInteropAPI _api;
        private readonly string _appId;
        private readonly string _appTitle;
        private readonly Dictionary<string, (string ContextType, Func<Context, Task<Context?>> Handle)> _handlers =
            new Dictionary<string, (string, Func<Context, Task<Context?>>)>(StringComparer.OrdinalIgnoreCase);

        // The client runs one discovery at a time, so this service raises one intent at a time.
        private readonly SemaphoreSlim _raiseLock = new SemaphoreSlim(1, 1);
        private readonly CancellationTokenSource _disposeCts = new CancellationTokenSource();
        private TaskCompletionSource<AggregateIntentDetailsEvent>? _pendingDiscovery;
        private TaskCompletionSource<IntentResult>? _pendingResult;
        private string? _pendingResultSessionId;
        private volatile bool _disposed;

        /// <param name="api">The client, connected or not yet connected.</param>
        /// <param name="appId">The app id reported to other sessions. The client adds this session to it.</param>
        /// <param name="appTitle">The title other sessions can show for this app.</param>
        public IntentService(CloudInteropAPI api, string appId, string appTitle)
        {
            _api = api;
            _appId = appId;
            _appTitle = appTitle;

            _api.AggregateIntentDetails += OnAggregateIntentDetails;
            _api.IntentResult += OnIntentResult;
            _api.ReportIntents += OnReportIntents;
            _api.RaiseIntent += OnRaiseIntent;
        }

        /// <summary>
        /// Raised when handling a request from another session fails, for example when the reply cannot be sent.
        /// </summary>
        public event EventHandler<Exception>? Error;

        /// <summary>
        /// Handle <paramref name="intent"/> for contexts of <paramref name="contextType"/>. The context the
        /// handler returns, if any, is sent back to the app that raised the intent.
        /// </summary>
        public void AddIntentHandler(string intent, string contextType, Func<Context, Task<Context?>> handler)
        {
            _handlers[intent] = (contextType, handler);
        }

        /// <summary>
        /// Raise <paramref name="intent"/> with <paramref name="context"/> at the first app that handles it,
        /// and return that app's title and the context it sent back.
        /// </summary>
        /// <exception cref="InvalidOperationException">No app handles the intent, or the handler failed.</exception>
        /// <exception cref="TimeoutException">The handling app did not reply in time.</exception>
        public async Task<(string App, Context? Result)> RaiseIntentAsync(string intent, Context context, CancellationToken cancellationToken = default)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(IntentService));
            }

            using var linked = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, _disposeCts.Token);
            try
            {
                await _raiseLock.WaitAsync(linked.Token).ConfigureAwait(false);
            }
            catch (OperationCanceledException) when (_disposed && !cancellationToken.IsCancellationRequested)
            {
                throw new ObjectDisposedException(nameof(IntentService));
            }

            try
            {
                if (_disposed)
                {
                    throw new ObjectDisposedException(nameof(IntentService));
                }

                // 1. Discover. Listen before starting: with no other sessions the answer arrives before
                // StartIntentDiscoveryAsync returns.
                var discovery = new TaskCompletionSource<AggregateIntentDetailsEvent>(TaskCreationOptions.RunContinuationsAsynchronously);
                _pendingDiscovery = discovery;
                using var cancelDiscovery = linked.Token.Register(() => discovery.TrySetCanceled());
                var find = new FindIntentOptions.FindByIntent(intent, context);
                await _api.StartIntentDiscoveryAsync(new StartIntentDiscoveryOptions(find, DiscoveryTimeoutMs), linked.Token).ConfigureAwait(false);
                var answers = await discovery.Task.ConfigureAwait(false);

                var app = answers.Responses
                    .SelectMany(response => response.Intents ?? new List<AppIntent>())
                    .Where(appIntent => string.Equals(appIntent.Intent?.Name, intent, StringComparison.OrdinalIgnoreCase))
                    .SelectMany(appIntent => appIntent.Apps ?? new List<AppIntent.AppMetadata>())
                    .FirstOrDefault(candidate => !string.IsNullOrEmpty(candidate.AppId))
                    ?? throw new InvalidOperationException($"NoAppsFound: nothing on the platform handles {intent}.");

                // 2. Raise. The app id is appId::sourceId::sessionId, and the session part identifies the reply.
                var pendingResult = new TaskCompletionSource<IntentResult>(TaskCreationOptions.RunContinuationsAsynchronously);
                _pendingResult = pendingResult;
                _pendingResultSessionId = AppIdUtils.ParseCloudAppId(app.AppId).SessionId;
                var raise = new RaiseIntentOptions.RaiseByIntent(intent, context);
                await _api.RaiseIntentAsync(new RaiseIntentAPIOptions(raise, app.AppId!), linked.Token).ConfigureAwait(false);

                // 3. Wait for the result.
                var finished = await Task.WhenAny(pendingResult.Task, Task.Delay(ResultTimeout, linked.Token)).ConfigureAwait(false);
                if (finished != pendingResult.Task)
                {
                    if (_disposed && !cancellationToken.IsCancellationRequested)
                    {
                        throw new ObjectDisposedException(nameof(IntentService));
                    }

                    cancellationToken.ThrowIfCancellationRequested();
                    throw new TimeoutException($"{app.Title ?? app.AppId} did not return a result for {intent}.");
                }

                var result = await pendingResult.Task.ConfigureAwait(false);
                if (result.IsError)
                {
                    throw new InvalidOperationException(result.Error);
                }

                return (app.Title ?? app.AppId!, result.GetResult);
            }
            catch (OperationCanceledException) when (_disposed && !cancellationToken.IsCancellationRequested)
            {
                throw new ObjectDisposedException(nameof(IntentService));
            }
            finally
            {
                _pendingDiscovery = null;
                _pendingResult = null;
                _pendingResultSessionId = null;
                _raiseLock.Release();
            }
        }

        public void Dispose()
        {
            if (_disposed)
            {
                return;
            }

            _disposed = true;
            _api.AggregateIntentDetails -= OnAggregateIntentDetails;
            _api.IntentResult -= OnIntentResult;
            _api.ReportIntents -= OnReportIntents;
            _api.RaiseIntent -= OnRaiseIntent;
            _disposeCts.Cancel();
            _pendingDiscovery?.TrySetCanceled();
            _pendingResult?.TrySetCanceled();
            _disposeCts.Dispose();
        }

        /// <summary>
        /// Raising, step 1: every session has answered our discovery, or the timeout was reached.
        /// </summary>
        private void OnAggregateIntentDetails(object? sender, AggregateIntentDetailsEvent e)
        {
            _pendingDiscovery?.TrySetResult(e);
        }

        /// <summary>
        /// Raising, step 3: the app we raised the intent at sent back its result.
        /// </summary>
        private void OnIntentResult(object? sender, IntentResultEvent e)
        {
            var fromSessionId = e.Source?.SessionId ?? AppIdUtils.ParseCloudAppId(e.Result?.Source as string).SessionId;
            if (e.Result != null && fromSessionId == _pendingResultSessionId)
            {
                _pendingResult?.TrySetResult(e.Result);
            }
        }

        /// <summary>
        /// Handling, step 1: another session is discovering intents. Always reply, even with nothing, so that it
        /// does not have to wait for its discovery timeout.
        /// </summary>
        private async void OnReportIntents(object? sender, ReportIntentsEvent e)
        {
            if (e.DiscoveryId == null)
            {
                return;
            }

            try
            {
                var wantedIntent = e.FindOptions?.Intent;
                var wantedContextType = e.FindOptions?.Context?.Type;

                var appIntents = _handlers
                    .Where(handler => string.IsNullOrEmpty(wantedIntent) || string.Equals(handler.Key, wantedIntent, StringComparison.OrdinalIgnoreCase))
                    .Where(handler => wantedContextType == null || string.Equals(handler.Value.ContextType, wantedContextType, StringComparison.OrdinalIgnoreCase))
                    .Select(handler => new AppIntent(
                        new AppIntent.IntentMetadata(handler.Key, handler.Key),
                        new List<AppIntent.AppMetadata> { new AppIntent.AppMetadata(_appId) { Name = _appId, Title = _appTitle } }))
                    .ToList();

                await _api.ReportAppIntentsAsync(e.DiscoveryId, appIntents).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                Error?.Invoke(this, ex);
            }
        }

        /// <summary>
        /// Handling, step 2: another session raised an intent at us. Run the handler and send back the result.
        /// </summary>
        private async void OnRaiseIntent(object? sender, RaiseIntentEvent e)
        {
            if (e.InitiatingSessionId == null)
            {
                return;
            }

            var intent = e.RaiseOptions?.Intent;
            var context = e.RaiseOptions?.Context;

            IntentResult result;
            try
            {
                result = intent != null && context != null && _handlers.TryGetValue(intent, out var handler)
                    ? IntentResult.OfResolution(intent, _appId, null, await handler.Handle(context).ConfigureAwait(false))
                    : IntentResult.OfError("NoAppsFound");
            }
            catch (Exception ex)
            {
                result = IntentResult.OfError(ex.Message);
            }

            try
            {
                await _api.SendIntentResultAsync(e.InitiatingSessionId, result).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                Error?.Invoke(this, ex);
            }
        }
    }
}
