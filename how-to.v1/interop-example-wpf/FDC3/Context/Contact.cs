using Newtonsoft.Json;

namespace interop_intents_v1.FDC3.Context
{
    public class Contact : ContextBase
    {
        [JsonProperty("type")]
        public override string Type => "fdc3.contact";

    }
}
