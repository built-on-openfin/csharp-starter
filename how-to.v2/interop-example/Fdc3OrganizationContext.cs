using System.Text.Json.Serialization;

namespace OpenFin.Interop.Win.Sample
{
    public class Fdc3OrganizationContext : ContextBase
    {
        [JsonPropertyName("type")]
        public override string Type => "fdc3.organization";

    }
}
