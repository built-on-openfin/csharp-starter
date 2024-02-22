using System.Text.Json.Serialization;

namespace OpenFin.Interop.Win.Sample
{
    public class Fdc3ContactContext : ContextBase
    {
        [JsonPropertyName("type")]
        public override string Type => "fdc3.contact";

    }
}
