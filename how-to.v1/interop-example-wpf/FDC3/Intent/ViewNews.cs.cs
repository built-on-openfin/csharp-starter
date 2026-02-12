using interop_intents_v1.FDC3.Context;
using interop_intents_v1.FDC3.Intent;
using System.Xml.Linq;

namespace OpenFin.Interop.Win.Sample.FDC3.Intent
{
    public class ViewNews : IntentBase<Organization>
    {
        public ViewNews()
        {
            Name = "ViewNews";
        }
    }
}
