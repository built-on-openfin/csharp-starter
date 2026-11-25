using System;

namespace CloudInteropOms.Oms
{
    public enum LogKind
    {
        Info,
        Sent,
        Received,
        Error
    }

    /// <summary>
    /// A line in the activity log at the bottom of the window.
    /// </summary>
    public sealed class LogEntry
    {
        public LogEntry(LogKind kind, string message)
        {
            Kind = kind;
            Message = message;
        }

        public DateTime Time { get; } = DateTime.Now;

        public LogKind Kind { get; }

        public string Message { get; }
    }
}
