using Newtonsoft.Json;

namespace OpenFin.Interop.Win.Sample.FDC3.Context
{
    public class Instrument : ContextBase
    {
        [JsonProperty("type")]
        public override string Type => "fdc3.instrument";
    }
}
