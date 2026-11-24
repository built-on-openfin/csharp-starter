using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using OpenFin;

namespace CloudInteropOms.CloudInterop
{
    /// <summary>
    /// Shares context on a single context group (green, purple and so on), the way an app joined to
    /// a context group does in a HERE platform.
    /// </summary>
    /// <remarks>
    /// The <see cref="CloudInteropAPI.Context"/> event fires for every context group on the platform,
    /// so this class only passes on context for the group that has been joined. Context this session
    /// sets itself is never echoed back by the client.
    /// </remarks>
    public sealed class ContextChannel : IDisposable
    {
        private readonly CloudInteropAPI _api;
        private volatile string? _currentGroup;
        private object? _probedMqtt;

        public ContextChannel(CloudInteropAPI api)
        {
            _api = api;
            _api.Context += OnContext;
            _api.Reconnected += (_, _) => _ = AttachMqttProbe();
            _api.Disconnected += (_, _) => AgentDebug.Log("C", "ContextChannel.Disconnected", "mqtt disconnected", new { session = _api.SessionDetails?.SessionId, joined = _currentGroup });
            _api.Reconnecting += (_, attempt) => AgentDebug.Log("C", "ContextChannel.Reconnecting", "mqtt reconnecting", new { attempt, session = _api.SessionDetails?.SessionId });
            _api.SessionExpired += (_, _) => AgentDebug.Log("C", "ContextChannel.SessionExpired", "session expired", new { session = _api.SessionDetails?.SessionId });
            _api.Error += (_, error) => AgentDebug.Log("C", "ContextChannel.Error", "api error", new { session = _api.SessionDetails?.SessionId, error = error.Message });
        }

        /// <summary>
        /// The joined context group, or null when not joined to one.
        /// </summary>
        public string? CurrentGroup => _currentGroup;

        /// <summary>
        /// Raised when another session sets context on the joined context group.
        /// </summary>
        public event EventHandler<ContextEvent>? ContextReceived;

        /// <summary>
        /// Raised for context that arrives while not joined, or for a group other than the joined one.
        /// </summary>
        public event EventHandler<ContextEvent>? ContextIgnored;

        public void Join(string contextGroup)
        {
            _currentGroup = contextGroup;
            // #region agent log
            AgentDebug.Log("B", "ContextChannel.Join", "joined group", new { group = contextGroup, session = _api.SessionDetails?.SessionId });
            // #endregion
        }

        public void Leave()
        {
            _currentGroup = null;
            // #region agent log
            AgentDebug.Log("B", "ContextChannel.Leave", "left group", new { session = _api.SessionDetails?.SessionId });
            // #endregion
        }

        /// <summary>
        /// Subscribe to the live MQTT session so incoming context can be seen before the client filter.
        /// </summary>
        public async Task AttachMqttProbe()
        {
            // #region agent log
            try
            {
                var mqtt = _api.GetType().GetField("_mqtt", BindingFlags.Instance | BindingFlags.NonPublic)?.GetValue(_api);
                if (mqtt == null || ReferenceEquals(mqtt, _probedMqtt))
                {
                    AgentDebug.Log("C", "ContextChannel.AttachMqttProbe", "mqtt probe not attached", new
                    {
                        mqttNull = mqtt == null,
                        already = mqtt != null && ReferenceEquals(mqtt, _probedMqtt),
                        fields = string.Join(",", Array.ConvertAll(_api.GetType().GetFields(BindingFlags.Instance | BindingFlags.NonPublic), field => field.Name))
                    });
                    return;
                }

                EventInfo? messageReceived = null;
                for (var type = mqtt.GetType(); type != null && messageReceived == null; type = type.BaseType)
                {
                    messageReceived = type.GetEvent("MessageReceived", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
                }

                if (messageReceived == null)
                {
                    AgentDebug.Log("C", "ContextChannel.AttachMqttProbe", "mqtt probe missing event", new { mqttType = mqtt.GetType().FullName });
                    return;
                }

                Action<string, byte[]> handler = OnMqttProbe;
                messageReceived.AddEventHandler(mqtt, handler);
                _probedMqtt = mqtt;
                AgentDebug.Log("C", "ContextChannel.AttachMqttProbe", "mqtt probe attached", new
                {
                    mqttType = mqtt.GetType().FullName,
                    session = _api.SessionDetails?.SessionId,
                    topicRoot = _api.SessionDetails?.SessionRootTopic
                });
                LogMqttState("ContextChannel.AttachMqttProbe");
                await SubscribeWithoutNoLocalAsync().ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                AgentDebug.Log("C", "ContextChannel.AttachMqttProbe", "mqtt probe failed", new { error = ex.GetType().Name, ex.Message });
            }
            // #endregion
        }

        /// <summary>
        /// Set the context on the joined context group, which every other session joined to it receives.
        /// </summary>
        public Task BroadcastAsync(Context context, CancellationToken cancellationToken = default)
        {
            var group = _currentGroup ?? throw new InvalidOperationException("Join a context group before broadcasting.");
            // #region agent log
            AgentDebug.Log("D", "ContextChannel.BroadcastAsync", "posting context", new
            {
                group,
                type = context.Type,
                name = context.Name,
                session = _api.SessionDetails?.SessionId,
                source = _api.SessionDetails?.SourceId,
                platform = _api.SessionDetails?.PlatformId,
                build = "nolocal-off-1"
            });
            // #endregion
            LogMqttState("ContextChannel.BroadcastAsync");
            return _api.SetContextAsync(group, context, cancellationToken);
        }

        public void Dispose()
        {
            _api.Context -= OnContext;
        }

        private void OnContext(object? sender, ContextEvent e)
        {
            var group = _currentGroup;
            var accepted = group != null && e.Context != null && string.Equals(e.ContextGroup, group, StringComparison.OrdinalIgnoreCase);
            // #region agent log
            AgentDebug.Log(accepted ? "B" : "E", "ContextChannel.OnContext", accepted ? "context accepted" : "context ignored", new
            {
                joined = group,
                contextGroup = e.ContextGroup,
                contextNull = e.Context == null,
                contextType = e.Context?.Type,
                sourceSession = e.Source?.SessionId,
                sourceId = e.Source?.SourceId,
                ownSession = _api.SessionDetails?.SessionId,
                sameSession = e.Source?.SessionId != null && e.Source.SessionId == _api.SessionDetails?.SessionId
            });
            // #endregion
            if (accepted)
            {
                ContextReceived?.Invoke(this, e);
            }
            else
            {
                ContextIgnored?.Invoke(this, e);
            }
        }

        private async Task SubscribeWithoutNoLocalAsync()
        {
            // #region agent log
            try
            {
                var mqtt = _probedMqtt ?? _api.GetType().GetField("_mqtt", BindingFlags.Instance | BindingFlags.NonPublic)?.GetValue(_api);
                var client = mqtt?.GetType().GetField("_client", BindingFlags.Instance | BindingFlags.NonPublic)?.GetValue(mqtt);
                var factory = mqtt?.GetType().GetField("_factory", BindingFlags.Instance | BindingFlags.NonPublic)?.GetValue(mqtt);
                var root = _api.SessionDetails?.SessionRootTopic;
                if (client == null || factory == null || string.IsNullOrEmpty(root))
                {
                    AgentDebug.Log("F", "ContextChannel.SubscribeWithoutNoLocal", "nolocal subscribe skipped", new
                    {
                        build = "nolocal-off-1",
                        clientNull = client == null,
                        factoryNull = factory == null,
                        hasRoot = !string.IsNullOrEmpty(root)
                    });
                    return;
                }

                var assembly = factory.GetType().Assembly;
                var filterType = assembly.GetType("MQTTnet.Packets.MqttTopicFilter");
                var optionsType = assembly.GetType("MQTTnet.MqttClientSubscribeOptions");
                var qosType = assembly.GetType("MQTTnet.Protocol.MqttQualityOfServiceLevel");
                MethodInfo? subscribe = null;
                foreach (var method in client.GetType().GetMethods())
                {
                    var parameters = method.GetParameters();
                    if (method.Name == "SubscribeAsync" && parameters.Length == 2 && parameters[0].ParameterType.Name == "MqttClientSubscribeOptions")
                    {
                        subscribe = method;
                        break;
                    }
                }

                if (filterType == null || optionsType == null || qosType == null || subscribe == null)
                {
                    AgentDebug.Log("F", "ContextChannel.SubscribeWithoutNoLocal", "nolocal subscribe types missing", new
                    {
                        build = "nolocal-off-1",
                        filter = filterType != null,
                        options = optionsType != null,
                        qos = qosType != null,
                        subscribe = subscribe != null
                    });
                    return;
                }

                foreach (var topic in new[] { root + "/context-groups/#", root + "/commands" })
                {
                    var filter = Activator.CreateInstance(filterType)!;
                    filterType.GetProperty("Topic")!.SetValue(filter, topic);
                    filterType.GetProperty("QualityOfServiceLevel")!.SetValue(filter, Enum.Parse(qosType, "AtLeastOnce"));
                    filterType.GetProperty("NoLocal")!.SetValue(filter, false);
                    var options = Activator.CreateInstance(optionsType)!;
                    var filters = optionsType.GetProperty("TopicFilters")!.GetValue(options);
                    if (filters == null)
                    {
                        filters = Activator.CreateInstance(typeof(List<>).MakeGenericType(filterType));
                        optionsType.GetProperty("TopicFilters")!.SetValue(options, filters);
                    }

                    ((IList)filters!).Add(filter);
                    var task = (Task)subscribe.Invoke(client, new[] { options, CancellationToken.None })!;
                    await task.ConfigureAwait(false);
                    var result = task.GetType().GetProperty("Result")?.GetValue(task);
                    AgentDebug.Log("F", "ContextChannel.SubscribeWithoutNoLocal", "subscribed without nolocal", new
                    {
                        build = "nolocal-off-1",
                        topic,
                        session = _api.SessionDetails?.SessionId,
                        source = _api.SessionDetails?.SourceId,
                        result = DescribeSubscribeResult(result)
                    });
                }
            }
            catch (Exception ex)
            {
                AgentDebug.Log("F", "ContextChannel.SubscribeWithoutNoLocal", "nolocal subscribe failed", new
                {
                    build = "nolocal-off-1",
                    error = ex.GetType().Name,
                    message = ex.InnerException?.Message ?? ex.Message
                });
            }
            // #endregion
        }

        private static string DescribeSubscribeResult(object? result)
        {
            if (result == null)
            {
                return "null";
            }

            if (result.GetType().GetProperty("Items")?.GetValue(result) is not IEnumerable items)
            {
                return result.ToString() ?? "";
            }

            var codes = new List<string>();
            foreach (var item in items)
            {
                codes.Add(item?.GetType().GetProperty("ResultCode")?.GetValue(item)?.ToString() ?? "?");
            }

            return string.Join(",", codes);
        }

        private void LogMqttState(string location)
        {
            // #region agent log
            try
            {
                var mqtt = _api.GetType().GetField("_mqtt", BindingFlags.Instance | BindingFlags.NonPublic)?.GetValue(_api);
                var client = mqtt?.GetType().GetField("_client", BindingFlags.Instance | BindingFlags.NonPublic)?.GetValue(mqtt);
                var connected = client?.GetType().GetProperty("IsConnected")?.GetValue(client);
                var broker = _api.SessionDetails?.Url;
                if (!string.IsNullOrEmpty(broker) && Uri.TryCreate(broker, UriKind.Absolute, out var uri))
                {
                    broker = uri.GetLeftPart(UriPartial.Path);
                }

                AgentDebug.Log("C", location, "mqtt state", new
                {
                    session = _api.SessionDetails?.SessionId,
                    source = _api.SessionDetails?.SourceId,
                    mqttNull = mqtt == null,
                    clientNull = client == null,
                    connected,
                    broker,
                    joined = _currentGroup
                });
            }
            catch (Exception ex)
            {
                AgentDebug.Log("C", location, "mqtt state failed", new { error = ex.Message });
            }
            // #endregion
        }

        private void OnMqttProbe(string topic, byte[] payload)
        {
            // #region agent log
            try
            {
                var ownSession = _api.SessionDetails?.SessionId;
                var topicRoot = _api.SessionDetails?.SessionRootTopic;
                var isContext = topicRoot != null && topic.StartsWith(topicRoot + "/context-groups/", StringComparison.Ordinal);
                string? sourceSession = null;
                string? channelName = null;
                string? contextGroup = null;
                string? contextType = null;
                var hasContext = false;
                if (isContext && payload != null && payload.Length > 0)
                {
                    var message = JObject.Parse(Encoding.UTF8.GetString(payload));
                    var source = message["source"] as JObject;
                    sourceSession = source?.Value<string>("sessionId");
                    channelName = message.Value<string>("channelName");
                    contextGroup = message.Value<string>("contextGroup");
                    var context = (message["payload"] ?? message["context"]) as JObject;
                    hasContext = context != null;
                    contextType = context?.Value<string>("type");
                }

                AgentDebug.Log(isContext ? "A" : "C", "ContextChannel.OnMqttProbe", isContext ? "mqtt context message" : "mqtt other message", new
                {
                    topic,
                    bytes = payload?.Length ?? 0,
                    isContext,
                    ownSession,
                    sourceSession,
                    sameSession = sourceSession != null && sourceSession == ownSession,
                    channelName,
                    contextGroup,
                    hasContext,
                    contextType,
                    joined = _currentGroup
                });
            }
            catch (Exception ex)
            {
                AgentDebug.Log("A", "ContextChannel.OnMqttProbe", "mqtt probe parse failed", new { topic, error = ex.Message });
            }
            // #endregion
        }
    }

    internal static class AgentDebug
    {
        private const string LogPath = @"c:\Code\Github\built-on-openfin\csharp-starter\debug-736b80.log";

        public static void Log(string hypothesisId, string location, string message, object data)
        {
            // #region agent log
            try
            {
                var line = JsonConvert.SerializeObject(new
                {
                    sessionId = "736b80",
                    runId = "pre-fix",
                    hypothesisId,
                    location,
                    message,
                    data,
                    timestamp = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()
                });
                using var mutex = new Mutex(false, @"Local\CloudInteropOmsDebug736b80");
                var acquired = false;
                try
                {
                    acquired = mutex.WaitOne(1500);
                }
                catch (AbandonedMutexException)
                {
                    acquired = true;
                }

                if (!acquired)
                {
                    return;
                }

                try
                {
                    File.AppendAllText(LogPath, line + "\n");
                }
                finally
                {
                    mutex.ReleaseMutex();
                }
            }
            catch
            {
            }
            // #endregion
        }
    }
}
