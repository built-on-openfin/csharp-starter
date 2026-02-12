using interop_intents_v1.FDC3.Context;
using interop_intents_v1.FDC3.Intent;
using System.Xml.Linq;

namespace OpenFin.Interop.Win.Sample.FDC3.Intent
{
    public class ViewContact : IntentBase<Contact>
    {
        public ViewContact()
        {
            Name = "ViewContact";
        }
    }
}
