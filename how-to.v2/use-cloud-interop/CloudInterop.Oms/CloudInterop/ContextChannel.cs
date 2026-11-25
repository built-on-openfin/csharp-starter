using System;
using System.Threading;
using System.Threading.Tasks;
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

        public ContextChannel(CloudInteropAPI api)
        {
            _api = api;
            _api.Context += OnContext;
        }

        /// <summary>
        /// The joined context group, or null when not joined to one.
        /// </summary>
        public string? CurrentGroup => _currentGroup;

        /// <summary>
        /// Raised when another session sets context on the joined context group.
        /// </summary>
        public event EventHandler<ContextEvent>? ContextReceived;

        public void Join(string contextGroup)
        {
            _currentGroup = contextGroup;
        }

        public void Leave()
        {
            _currentGroup = null;
        }

        /// <summary>
        /// Set the context on the joined context group, which every other session joined to it receives.
        /// </summary>
        public Task BroadcastAsync(Context context, CancellationToken cancellationToken = default)
        {
            var group = _currentGroup ?? throw new InvalidOperationException("Join a context group before broadcasting.");
            return _api.SetContextAsync(group, context, cancellationToken);
        }

        public void Dispose()
        {
            _api.Context -= OnContext;
        }

        private void OnContext(object? sender, ContextEvent e)
        {
            var group = _currentGroup;
            if (group != null && e.Context != null && string.Equals(e.ContextGroup, group, StringComparison.OrdinalIgnoreCase))
            {
                ContextReceived?.Invoke(this, e);
            }
        }
    }
}
