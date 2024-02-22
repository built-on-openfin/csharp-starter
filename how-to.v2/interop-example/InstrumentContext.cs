using System.Text.Json.Serialization;

namespace OpenFin.Interop.Win.Sample
{
    public class InstrumentContext : ContextBase
    {
        [JsonPropertyName("type")]
        public override string Type => "instrument";
    }
}
