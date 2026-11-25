using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace CloudInteropOms.Oms
{
    public enum OrderSide
    {
        Buy,
        Sell
    }

    /// <summary>
    /// A row in the blotter. Each order carries the three things the sample shares:
    /// an instrument, the trader (a contact) and the counterparty (an organization).
    /// </summary>
    public sealed class Order : INotifyPropertyChanged
    {
        private bool _isHighlighted;
        private string _status = "New";

        public string OrderId { get; set; } = "";

        public string Ticker { get; set; } = "";

        public string InstrumentName { get; set; } = "";

        public OrderSide Side { get; set; }

        public int Quantity { get; set; }

        public decimal Price { get; set; }

        public string TraderName { get; set; } = "";

        public string TraderEmail { get; set; } = "";

        public string CounterpartyName { get; set; } = "";

        public string CounterpartyLei { get; set; } = "";

        public string Status
        {
            get => _status;
            set => SetField(ref _status, value);
        }

        /// <summary>
        /// True when the order matches the context or intent most recently received.
        /// </summary>
        public bool IsHighlighted
        {
            get => _isHighlighted;
            set => SetField(ref _isHighlighted, value);
        }

        public event PropertyChangedEventHandler? PropertyChanged;

        private void SetField<T>(ref T field, T value, [CallerMemberName] string? propertyName = null)
        {
            if (!Equals(field, value))
            {
                field = value;
                PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
            }
        }
    }
}
