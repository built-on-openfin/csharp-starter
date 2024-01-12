using Newtonsoft.Json.Linq;
using Openfin.Desktop.InteropAPI;
using OpenFin.Interop.Win.Sample.FDC3.Context;
using System;
using System.Collections.Generic;

namespace OpenFin.Interop.Win.Sample
{
    public class IntentContextReceivedEventArgs : EventArgs
    {
        public IntentContextReceivedEventArgs(Context context, string intentName)
        {
            IntentName = intentName;

            if (context.Type.IndexOf("fdc3.instrument") > -1)
            {
                var instrumentContext = new Instrument
                {
                    Type = context.Type,
                    Name = context.Name,
                    Id = (context.Id as JObject).ToObject<Dictionary<string, string>>()
                };
                Fdc3InstrumentContext = instrumentContext;
            }
            else if (context.Type.IndexOf("fdc3.contact") > -1)
            {

                var contactContext = new Contact
                {
                    Type = context.Type,
                    Name = context.Name
                };
                Fdc3ContactContext = contactContext;
            }
            else if (context.Type.IndexOf("fdc3.organization") > -1)
            {
                var organizationContext = new Organization
                {
                    Type = context.Type,
                    Name = context.Name
                };
                Fdc3OrganizationContext = organizationContext;
            }
        }

        public Instrument Fdc3InstrumentContext { get; protected set; }

        public Contact Fdc3ContactContext { get; protected set; }

        public Organization Fdc3OrganizationContext { get; protected set; }

        public string IntentName { get; protected set; }
    }
}
