using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using OpenFin;

namespace CloudInteropOms.CloudInterop
{
    /// <summary>
    /// The outcome of raising an intent: which app handled it and the context it returned, if any.
    /// </summary>
    public sealed class IntentResolution
    {
        public IntentResolution(string intent, AppIntent.AppMetadata app, Context? result)
        {
            Intent = intent;
            App = app;
            Result = result;
        }

        public string Intent { get; }

        public AppIntent.AppMetadata App { get; }

        public Context? Result { get; }
    }

    /// <summary>
    /// Raises FDC3 intents across Cloud Interop and handles the intents this app supports.
    /// </summary>
    /// <remarks>
    /// Raising an intent is a three step conversation with the other sessions on the platform:
    /// <list type="number">
    /// <item><b>Discover:</b> <see cref="CloudInteropAPI.StartIntentDiscoveryAsync"/> asks every other session
    /// which apps can handle the intent. Each one answers through <see cref="CloudInteropAPI.ReportAppIntentsAsync"/>
    /// and the answers arrive together in the <see cref="CloudInteropAPI.AggregateIntentDetails"/> event.</item>
    /// <item><b>Raise:</b> <see cref="CloudInteropAPI.RaiseIntentAsync"/> sends the intent to the chosen app.
    /// Its session receives the <see cref="CloudInteropAPI.RaiseIntent"/> event.</item>
    /// <item><b>Result:</b> the handling session replies with <see cref="CloudInteropAPI.SendIntentResultAsync"/>
    /// and the raising session receives the <see cref="CloudInteropAPI.IntentResult"/> event.</item>
    /// </list>
    /// </remarks>
    public sealed class IntentService : IDisposable
    {
        private static readonly TimeSpan ResultTimeout = TimeSpan.FromSeconds(15);

        private readonly CloudInteropAPI _api;
        private readonly string _appId;
        private readonly string _appTitle;
        private readonly ConcurrentDictionary<string, IntentHandler> _handlers =
            new ConcurrentDictionary<string, IntentHandler>(StringComparer.OrdinalIgnoreCase);
        private readonly ConcurrentDictionary<string, TaskCompletionSource<IntentResult>> _pendingResults =
            new ConcurrentDictionary<string, TaskCompletionSource<IntentResult>>();
        private readonly SemaphoreSlim _discoveryLock = new SemaphoreSlim(1, 1);
        private TaskCompletionSource<AggregateIntentDetailsEvent>? _pendingDiscovery;

        /// <param name="api">The connected client.</param>
        /// <param name="appId">The app id reported to other sessions. The client adds the session to it.</param>
        /// <param name="appTitle">The title other sessions can show in an intent resolver.</param>
        public IntentService(CloudInteropAPI api, string appId, string appTitle)
        {
            _api = api;
            _appId = appId;
            _appTitle = appTitle;

            _api.AggregateIntentDetails += OnAggregateIntentDetails;
            _api.IntentDetails += OnIntentDetails;
            _api.IntentResult += OnIntentResult;
            _api.ReportIntents += OnReportIntents;
            _api.RaiseIntent += OnRaiseIntent;
        }

        /// <summary>
        /// A step by step description of what the service is doing (registering handlers, discovery,
        /// raising, results and incoming requests), for showing in a log while learning or debugging.
        /// </summary>
        public event EventHandler<string>? Trace;

        /// <summary>
        /// Raised when the handling side fails, for example when a report or a result cannot be sent.
        /// </summary>
        public event EventHandler<Exception>? Error;

        /// <summary>
        /// Raised when another session raises one of our intents, before the handler runs.
        /// </summary>
        public event EventHandler<RaiseIntentEvent>? IntentReceived;

        public int DiscoveryTimeoutMs { get; set; } = 3000;

        /// <summary>
        /// Handle an intent. Other sessions discover this app when they look for <paramref name="intent"/>
        /// with one of <paramref name="contextTypes"/>, and <paramref name="handler"/> runs when they raise it.
        /// The context it returns, if any, is sent back as the intent result.
        /// </summary>
        public void AddIntentHandler(string intent, string displayName, IEnumerable<string> contextTypes, Func<Context, Task<Context?>> handler)
        {
            var registration = new IntentHandler(intent, displayName, contextTypes.ToList(), handler);
            _handlers[intent] = registration;
            OnTrace($"Registered handler for {intent} ({string.Join(", ", registration.ContextTypes)}) as app {_appId}");
        }

        /// <summary>
        /// Ask the other sessions which apps can handle <paramref name="intent"/> for <paramref name="context"/>.
        /// </summary>
        public async Task<IReadOnlyList<AppIntent.AppMetadata>> FindIntentAsync(string intent, Context? context, CancellationToken cancellationToken = default)
        {
            // The client only allows one discovery at a time.
            await _discoveryLock.WaitAsync(cancellationToken).ConfigureAwait(false);
            try
            {
                // Listen before starting: when there are no other sessions the aggregate event fires
                // before StartIntentDiscoveryAsync returns.
                var discovery = new TaskCompletionSource<AggregateIntentDetailsEvent>(TaskCreationOptions.RunContinuationsAsynchronously);
                _pendingDiscovery = discovery;

                var findOptions = new FindIntentOptions.FindByIntent(intent, context);
                var started = DateTime.UtcNow;
                OnTrace($"Discovery started for {intent} with {context?.Type ?? "no context"} (timeout {DiscoveryTimeoutMs} ms)");
                await _api.StartIntentDiscoveryAsync(new StartIntentDiscoveryOptions(findOptions, DiscoveryTimeoutMs), cancellationToken).ConfigureAwait(false);

                // The aggregate event fires once every session has answered or the timeout is reached.
                var aggregate = await discovery.Task.ConfigureAwait(false);

                var apps = aggregate.Responses
                    .SelectMany(response => response.Intents ?? new List<AppIntent>())
                    .Where(appIntent => string.Equals(appIntent.Intent?.Name, intent, StringComparison.OrdinalIgnoreCase))
                    .SelectMany(appIntent => appIntent.Apps ?? new List<AppIntent.AppMetadata>())
                    .Where(app => !string.IsNullOrEmpty(app.AppId))
                    .ToList();

                // Finishing almost immediately with no answers means the service said no other session was
                // part of the discovery, so nobody was asked.
                var elapsedMs = (int)(DateTime.UtcNow - started).TotalMilliseconds;
                var hint = aggregate.Responses.Count == 0 && elapsedMs < DiscoveryTimeoutMs / 2
                    ? " - finished at once, so the service did not ask any other session"
                    : "";
                OnTrace($"Discovery finished for {intent} after {elapsedMs} ms: {aggregate.Responses.Count} answer(s), " +
                        $"{apps.Count} app(s){(apps.Count > 0 ? ": " + string.Join(", ", apps.Select(app => app.AppId)) : "")}{hint}");

                return apps;
            }
            finally
            {
                _pendingDiscovery = null;
                _discoveryLock.Release();
            }
        }

        /// <summary>
        /// Raise <paramref name="intent"/> with <paramref name="context"/>. When more than one app can handle
        /// it, <paramref name="chooseApp"/> picks one (a real app would show an intent resolver); by default
        /// the first app found is used.
        /// </summary>
        /// <exception cref="InvalidOperationException">No app handles the intent, or the handler returned an error.</exception>
        /// <exception cref="TimeoutException">The handler did not reply in time.</exception>
        public async Task<IntentResolution> RaiseIntentAsync(
            string intent,
            Context context,
            Func<IReadOnlyList<AppIntent.AppMetadata>, AppIntent.AppMetadata>? chooseApp = null,
            CancellationToken cancellationToken = default)
        {
            var apps = await FindIntentAsync(intent, context, cancellationToken).ConfigureAwait(false);
            if (apps.Count == 0)
            {
                throw new InvalidOperationException($"NoAppsFound: nothing on the platform handles {intent}.");
            }

            var app = chooseApp?.Invoke(apps) ?? apps[0];

            // The app id from discovery is a cloud app id: appId::sourceId::sessionId. The session part is
            // how the result is matched back to this request.
            var targetSessionId = AppIdUtils.ParseCloudAppId(app.AppId).SessionId;
            OnTrace($"Raising {intent} at {app.AppId} (session {targetSessionId}) with {Fdc3.Describe(context)}");
            var pendingResult = new TaskCompletionSource<IntentResult>(TaskCreationOptions.RunContinuationsAsynchronously);
            _pendingResults[targetSessionId] = pendingResult;

            try
            {
                var raiseOptions = new RaiseIntentOptions.RaiseByIntent(intent, context);
                await _api.RaiseIntentAsync(new RaiseIntentAPIOptions(raiseOptions, app.AppId!), cancellationToken).ConfigureAwait(false);

                var completed = await Task.WhenAny(pendingResult.Task, Task.Delay(ResultTimeout, cancellationToken)).ConfigureAwait(false);
                if (completed != pendingResult.Task)
                {
                    cancellationToken.ThrowIfCancellationRequested();
                    OnTrace($"No result for {intent} from session {targetSessionId} within {ResultTimeout.TotalSeconds:0} s");
                    throw new TimeoutException($"{app.Title ?? app.AppId} did not return a result for {intent}.");
                }

                var result = pendingResult.Task.Result;
                if (result.IsError)
                {
                    throw new InvalidOperationException(result.Error);
                }

                return new IntentResolution(intent, app, result.GetResult);
            }
            finally
            {
                _pendingResults.TryRemove(targetSessionId, out _);
            }
        }

        public void Dispose()
        {
            _api.AggregateIntentDetails -= OnAggregateIntentDetails;
            _api.IntentDetails -= OnIntentDetails;
            _api.IntentResult -= OnIntentResult;
            _api.ReportIntents -= OnReportIntents;
            _api.RaiseIntent -= OnRaiseIntent;
        }

        private void OnAggregateIntentDetails(object? sender, AggregateIntentDetailsEvent e)
        {
            _pendingDiscovery?.TrySetResult(e);
        }

        /// <summary>
        /// One session's answer to our discovery. They are also collected into the aggregate event.
        /// </summary>
        private void OnIntentDetails(object? sender, IntentDetailsEvent e)
        {
            var reported = (e.Intents ?? new List<AppIntent>())
                .Select(appIntent => $"{appIntent.Intent?.Name} by {string.Join(", ", (appIntent.Apps ?? new List<AppIntent.AppMetadata>()).Select(app => app.AppId))}")
                .ToList();

            OnTrace($"Discovery answer from {DescribeSource(e.Source)}: " +
                    (reported.Count == 0 ? "handles nothing" : string.Join("; ", reported)));
        }

        private void OnIntentResult(object? sender, IntentResultEvent e)
        {
            var handlingSessionId = e.Source?.SessionId
                ?? AppIdUtils.ParseCloudAppId(e.Result?.Source as string).SessionId;

            var outcome = e.Result == null ? "no result"
                : e.Result.IsError ? $"error {e.Result.Error}"
                : Fdc3.Describe(e.Result.GetResult);

            if (handlingSessionId != null
                && e.Result != null
                && _pendingResults.TryGetValue(handlingSessionId, out var pendingResult))
            {
                OnTrace($"Result for {e.Result.Intent} from {DescribeSource(e.Source)}: {outcome}");
                pendingResult.TrySetResult(e.Result);
            }
            else
            {
                OnTrace($"Ignored a result from {DescribeSource(e.Source)} that matches no pending intent: {outcome}");
            }
        }

        /// <summary>
        /// Another session is discovering intents: report the ones we handle. We always reply, even with
        /// nothing, so that the other session does not have to wait for its discovery timeout.
        /// </summary>
        private async void OnReportIntents(object? sender, ReportIntentsEvent e)
        {
            if (e.DiscoveryId == null)
            {
                return;
            }

            try
            {
                var find = e.FindOptions;
                OnTrace($"Discovery request from {DescribeSource(e.Source)} ({find?.Type}) for " +
                        $"{(string.IsNullOrEmpty(find?.Intent) ? "any intent" : find!.Intent)} with {find?.Context?.Type ?? "no context"} " +
                        $"({e.SessionCount} session(s) in the discovery)");

                var appIntents = _handlers.Values
                    .Where(handler => handler.Matches(e.FindOptions))
                    .Select(handler => handler.ToAppIntent(_appId, _appTitle))
                    .ToList();

                await _api.ReportAppIntentsAsync(e.DiscoveryId, appIntents).ConfigureAwait(false);

                OnTrace(appIntents.Count == 0
                    ? $"Reported no matching intents (registered: {string.Join(", ", _handlers.Keys)})"
                    : $"Reported {string.Join(", ", appIntents.Select(appIntent => appIntent.Intent?.Name))} as app {_appId}");
            }
            catch (Exception ex)
            {
                Error?.Invoke(this, ex);
            }
        }

        /// <summary>
        /// Another session raised an intent at us: run the handler and send back the result.
        /// </summary>
        private async void OnRaiseIntent(object? sender, RaiseIntentEvent e)
        {
            if (e.InitiatingSessionId == null)
            {
                return;
            }

            IntentResult result;
            try
            {
                IntentReceived?.Invoke(this, e);

                var options = e.RaiseOptions;
                OnTrace($"Intent request from {DescribeSource(e.Source)} ({options?.Type}): " +
                        $"{options?.Intent ?? "by context"} with {Fdc3.Describe(options?.Context)}");

                var handler = options?.Intent != null
                    ? (_handlers.TryGetValue(options.Intent, out var byName) ? byName : null)
                    : _handlers.Values.FirstOrDefault(candidate => candidate.HandlesContext(options?.Context?.Type));

                if (handler == null || options?.Context == null)
                {
                    OnTrace($"No handler for {options?.Intent ?? options?.Context?.Type} (registered: {string.Join(", ", _handlers.Keys)})");
                    result = IntentResult.OfError("NoAppsFound");
                }
                else
                {
                    var returned = await handler.Handler(options.Context).ConfigureAwait(false);
                    OnTrace($"Handler for {handler.Intent} returned {(returned == null ? "no result" : Fdc3.Describe(returned))}");
                    result = IntentResult.OfResolution(handler.Intent, _appId, null, returned);
                }
            }
            catch (Exception ex)
            {
                OnTrace($"Handler failed: {ex.Message}");
                result = IntentResult.OfError(ex.Message);
            }

            try
            {
                await _api.SendIntentResultAsync(e.InitiatingSessionId, result).ConfigureAwait(false);
                OnTrace($"Sent {(result.IsError ? "error " + result.Error : "result")} back to session {e.InitiatingSessionId}");
            }
            catch (Exception ex)
            {
                Error?.Invoke(this, ex);
            }
        }

        private void OnTrace(string message)
        {
            Trace?.Invoke(this, message);
        }

        /// <summary>
        /// Who a message came from, including the user and organization the service assigned to the session.
        /// </summary>
        private static string DescribeSource(Source? source)
        {
            return source == null
                ? "an unknown session"
                : $"{source.SourceId} (session {source.SessionId}, user {source.UserId}, org {source.OrgId})";
        }

        private sealed class IntentHandler
        {
            public IntentHandler(string intent, string displayName, IReadOnlyList<string> contextTypes, Func<Context, Task<Context?>> handler)
            {
                Intent = intent;
                DisplayName = displayName;
                ContextTypes = contextTypes;
                Handler = handler;
            }

            public string Intent { get; }

            public string DisplayName { get; }

            public IReadOnlyList<string> ContextTypes { get; }

            public Func<Context, Task<Context?>> Handler { get; }

            public bool HandlesContext(string? contextType)
            {
                return contextType == null || ContextTypes.Contains(contextType, StringComparer.OrdinalIgnoreCase);
            }

            /// <summary>
            /// Discovery is either by intent ("find-intent", optionally with a context) or by context alone
            /// ("find-intents-by-context").
            /// </summary>
            public bool Matches(ReportIntentsEvent.FindIntentOptionsContainer? findOptions)
            {
                if (findOptions == null)
                {
                    return false;
                }

                var intentMatches = findOptions.Type == "find-intents-by-context"
                    || string.IsNullOrEmpty(findOptions.Intent)
                    || string.Equals(findOptions.Intent, Intent, StringComparison.OrdinalIgnoreCase);

                return intentMatches && HandlesContext(findOptions.Context?.Type);
            }

            public AppIntent ToAppIntent(string appId, string appTitle)
            {
                var app = new AppIntent.AppMetadata(appId) { Name = appId, Title = appTitle };
                return new AppIntent(new AppIntent.IntentMetadata(Intent, DisplayName), new List<AppIntent.AppMetadata> { app });
            }
        }
    }
}
