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
        // Every session must answer within this time to be found, including the first request after a quiet period,
        // which can be slow while a new HTTPS connection is set up.
        private const int DiscoveryTimeoutMs = 5000;
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
        private volatile bool _disposed;

        // The protocol has no per-raise request id, so a reply that arrives after a raise was abandoned could be
        // mistaken for the reply to the next raise at the same session. Sessions with an unanswered raise are
        // blocked until that reply arrives or the hold expires. _resultLock makes completing the pending result
        // and abandoning it a single transition, so a reply is either used or drained, never both or neither.
        private static readonly TimeSpan AbandonedRaiseHold = TimeSpan.FromSeconds(60);
        private readonly object _resultLock = new object();
        private readonly Dictionary<string, DateTime> _abandonedSessions = new Dictionary<string, DateTime>();
        private TaskCompletionSource<IntentResult>? _pendingResult;
        private string? _pendingResultSessionId;
        private string? _pendingResultIntent;

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
        /// Raised when this session answers another session's intent discovery, describing who asked, what was
        /// answered and how long the answer took to send.
        /// </summary>
        public event EventHandler<string>? DiscoveryAnswered;

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
                var targetSessionId = AppIdUtils.ParseCloudAppId(app.AppId).SessionId;
                if (IsAwaitingAbandonedReply(targetSessionId))
                {
                    throw new InvalidOperationException(
                        $"{app.Title ?? app.AppId} has not answered an earlier request yet. Try again shortly.");
                }

                var pendingResult = new TaskCompletionSource<IntentResult>(TaskCreationOptions.RunContinuationsAsynchronously);
                lock (_resultLock)
                {
                    _pendingResult = pendingResult;
                    _pendingResultSessionId = targetSessionId;
                    _pendingResultIntent = intent;
                }

                var raise = new RaiseIntentOptions.RaiseByIntent(intent, context);
                await _api.RaiseIntentAsync(new RaiseIntentAPIOptions(raise, app.AppId!), linked.Token).ConfigureAwait(false);

                // 3. Wait for the result. WhenAny does not throw when the delay is cancelled, so timeouts and
                // cancellation both arrive here. The reply can still win while the raise is being abandoned.
                var finished = await Task.WhenAny(pendingResult.Task, Task.Delay(ResultTimeout, linked.Token)).ConfigureAwait(false);
                if (finished != pendingResult.Task && TryAbandonPendingResult(pendingResult, targetSessionId))
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
                lock (_resultLock)
                {
                    _pendingResult = null;
                    _pendingResultSessionId = null;
                    _pendingResultIntent = null;
                }

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
            lock (_resultLock)
            {
                _pendingResult?.TrySetCanceled();
            }

            _disposeCts.Dispose();
        }

        /// <summary>
        /// Stop waiting for <paramref name="pendingResult"/> and hold <paramref name="sessionId"/> until its late
        /// reply arrives. Returns false, leaving the session free, if the reply already completed the result.
        /// </summary>
        private bool TryAbandonPendingResult(TaskCompletionSource<IntentResult> pendingResult, string sessionId)
        {
            lock (_resultLock)
            {
                if (pendingResult.Task.IsCompleted)
                {
                    return false;
                }

                _pendingResult = null;
                _pendingResultSessionId = null;
                _pendingResultIntent = null;
                _abandonedSessions[sessionId] = DateTime.UtcNow + AbandonedRaiseHold;
                return true;
            }
        }

        private bool IsAwaitingAbandonedReply(string sessionId)
        {
            lock (_resultLock)
            {
                if (!_abandonedSessions.TryGetValue(sessionId, out var holdUntil))
                {
                    return false;
                }

                if (DateTime.UtcNow < holdUntil)
                {
                    return true;
                }

                _abandonedSessions.Remove(sessionId);
                return false;
            }
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
            if (e.Result == null)
            {
                return;
            }

            // The Cloud Interop protocol has no per-raise request id, so match both the target session and intent name.
            var fromSessionId = e.Source?.SessionId ?? AppIdUtils.ParseCloudAppId(e.Result.Source as string).SessionId;
            lock (_resultLock)
            {
                if (fromSessionId != null && _abandonedSessions.Remove(fromSessionId))
                {
                    return;
                }

                var intentMatches = e.Result.IsError
                    || string.Equals(e.Result.Intent, _pendingResultIntent, StringComparison.OrdinalIgnoreCase);

                if (fromSessionId == _pendingResultSessionId && intentMatches)
                {
                    _pendingResult?.TrySetResult(e.Result);
                }
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

            var stopwatch = System.Diagnostics.Stopwatch.StartNew();
            var wantedIntent = e.FindOptions?.Intent;
            var wantedContextType = e.FindOptions?.Context?.Type;
            var request = $"discovery from {e.Source?.SourceId ?? e.InitiatingSessionId} for {wantedIntent ?? "any intent"}"
                + (wantedContextType == null ? "" : $" with {wantedContextType}");
            try
            {

                var appIntents = _handlers
                    .Where(handler => string.IsNullOrEmpty(wantedIntent) || string.Equals(handler.Key, wantedIntent, StringComparison.OrdinalIgnoreCase))
                    .Where(handler => wantedContextType == null || string.Equals(handler.Value.ContextType, wantedContextType, StringComparison.OrdinalIgnoreCase))
                    .Select(handler => new AppIntent(
                        new AppIntent.IntentMetadata(handler.Key, handler.Key),
                        new List<AppIntent.AppMetadata> { new AppIntent.AppMetadata(_appId) { Name = _appId, Title = _appTitle } }))
                    .ToList();

                await _api.ReportAppIntentsAsync(e.DiscoveryId, appIntents).ConfigureAwait(false);
                var answer = appIntents.Count == 0 ? "nothing" : string.Join(", ", appIntents.Select(appIntent => appIntent.Intent?.Name));
                DiscoveryAnswered?.Invoke(this, $"Answered {request} with {answer} in {stopwatch.ElapsedMilliseconds} ms");
            }
            catch (Exception ex)
            {
                Error?.Invoke(this, new InvalidOperationException(
                    $"Answering {request} failed after {stopwatch.ElapsedMilliseconds} ms: {ex.Message}", ex));
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
