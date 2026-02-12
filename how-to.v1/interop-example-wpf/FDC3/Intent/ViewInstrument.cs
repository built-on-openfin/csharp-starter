using interop_intents_v1.FDC3.Context;
using interop_intents_v1.FDC3.Intent;
using System.Xml.Linq;

namespace OpenFin.Interop.Win.Sample.FDC3.Intent
{
    public class ViewInstrument : IntentBase<Instrument>
    {
        public ViewInstrument()
        {
            Name = "ViewInstrument";
        }
    }
}
