using System.Collections.Generic;

namespace CloudInteropOms.Oms
{
    /// <summary>
    /// Made up orders so that the blotter has something to share.
    /// </summary>
    public static class SampleOrders
    {
        private static readonly (string Name, string Email)[] Traders =
        {
            ("Jane Doe", "jane.doe@example.com"),
            ("John Smith", "john.smith@example.com"),
            ("Priya Patel", "priya.patel@example.com"),
            ("Wei Chen", "wei.chen@example.com")
        };

        private static readonly (string Name, string Lei)[] Counterparties =
        {
            ("Example Bank PLC", "5493001KJTIIGC8Y1R12"),
            ("Sample Asset Management", "529900T8BM49AURSDO55"),
            ("Demo Capital LLC", "254900OPPU84GM83MG36")
        };

        private static readonly (string Ticker, string Name, decimal Price)[] Instruments =
        {
            ("AAPL", "Apple Inc.", 227.52m),
            ("MSFT", "Microsoft Corporation", 418.16m),
            ("TSLA", "Tesla, Inc.", 251.44m),
            ("GOOGL", "Alphabet Inc.", 166.21m),
            ("AMZN", "Amazon.com, Inc.", 186.51m),
            ("NVDA", "NVIDIA Corporation", 135.58m),
            ("IBM", "International Business Machines", 213.33m),
            ("JPM", "JPMorgan Chase & Co.", 222.36m)
        };

        private static readonly string[] Statuses = { "New", "Working", "Part Filled", "Filled" };

        public static List<Order> Create()
        {
            var orders = new List<Order>();
            for (var i = 0; i < 12; i++)
            {
                var instrument = Instruments[i % Instruments.Length];
                var trader = Traders[i % Traders.Length];
                var counterparty = Counterparties[i % Counterparties.Length];

                orders.Add(new Order
                {
                    OrderId = $"ORD-{1001 + i}",
                    Ticker = instrument.Ticker,
                    InstrumentName = instrument.Name,
                    Side = i % 3 == 0 ? OrderSide.Sell : OrderSide.Buy,
                    Quantity = 100 * (1 + (i * 7 % 25)),
                    Price = instrument.Price,
                    TraderName = trader.Name,
                    TraderEmail = trader.Email,
                    CounterpartyName = counterparty.Name,
                    CounterpartyLei = counterparty.Lei,
                    Status = Statuses[i % Statuses.Length]
                });
            }

            return orders;
        }
    }
}
