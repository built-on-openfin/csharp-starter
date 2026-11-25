using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using OpenFin;

namespace CloudInteropOms.CloudInterop
{
    /// <summary>
    /// Helpers for building and reading the FDC3 contexts this sample shares. A
    /// <see cref="Context"/> is the FDC3 shape: a <c>type</c>, an optional <c>name</c>, an
    /// <c>id</c> map, and anything else in <see cref="Context.ExtraProperties"/>.
    /// </summary>
    public static class Fdc3
    {
        public static class ContextTypes
        {
            public const string Instrument = "fdc3.instrument";
            public const string Contact = "fdc3.contact";
            public const string Organization = "fdc3.organization";
            public const string Order = "fdc3.order";
        }

        public static class Intents
        {
            public const string ViewInstrument = "ViewInstrument";
            public const string ViewContact = "ViewContact";
            public const string ViewOrganization = "ViewOrganization";
        }

        /// <summary>{ "type": "fdc3.instrument", "name": "Apple Inc.", "id": { "ticker": "AAPL" } }</summary>
        public static Context Instrument(string ticker, string? name = null)
        {
            return new Context(ContextTypes.Instrument, name ?? ticker)
            {
                Id = new Dictionary<string, object> { ["ticker"] = ticker }
            };
        }

        /// <summary>{ "type": "fdc3.contact", "name": "Jane Doe", "id": { "email": "jane.doe@example.com" } }</summary>
        public static Context Contact(string email, string? name = null)
        {
            return new Context(ContextTypes.Contact, name ?? email)
            {
                Id = new Dictionary<string, object> { ["email"] = email }
            };
        }

        /// <summary>{ "type": "fdc3.organization", "name": "Example Bank", "id": { "LEI": "..." } }</summary>
        public static Context Organization(string lei, string? name = null)
        {
            return new Context(ContextTypes.Organization, name ?? lei)
            {
                Id = new Dictionary<string, object> { ["LEI"] = lei }
            };
        }

        /// <summary>
        /// An fdc3.order, returned as the result of an intent: an order id plus the instrument it is for.
        /// </summary>
        public static Context Order(string orderId, Context instrument)
        {
            var product = new JObject
            {
                ["type"] = "fdc3.product",
                ["instrument"] = JObject.FromObject(instrument)
            };

            return new Context(ContextTypes.Order)
            {
                Id = new Dictionary<string, object> { ["orderId"] = orderId },
                ExtraProperties = new Dictionary<string, JToken> { ["details"] = new JObject { ["product"] = product } }
            };
        }

        /// <summary>
        /// Read an id value such as <c>ticker</c>, ignoring the case of the key.
        /// </summary>
        public static string? GetId(Context? context, string key)
        {
            if (context?.Id == null)
            {
                return null;
            }

            foreach (var pair in context.Id)
            {
                if (string.Equals(pair.Key, key, StringComparison.OrdinalIgnoreCase))
                {
                    return Convert.ToString(pair.Value);
                }
            }

            return null;
        }

        public static bool IsType(Context? context, string type)
        {
            return string.Equals(context?.Type, type, StringComparison.OrdinalIgnoreCase);
        }

        /// <summary>
        /// A one line description for the activity log, for example
        /// <c>fdc3.instrument "Apple Inc." (ticker=AAPL)</c>.
        /// </summary>
        public static string Describe(Context? context)
        {
            if (context == null)
            {
                return "(no context)";
            }

            var ids = context.Id == null
                ? ""
                : " (" + string.Join(", ", context.Id.Select(pair => $"{pair.Key}={pair.Value}")) + ")";
            var name = string.IsNullOrEmpty(context.Name) ? "" : $" \"{context.Name}\"";
            return $"{context.Type}{name}{ids}";
        }
    }
}
