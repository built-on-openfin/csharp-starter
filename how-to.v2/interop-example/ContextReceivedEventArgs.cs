using OpenFin.Net.Adapter.Interop;
using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace OpenFin.Interop.Win.Sample
{
    public class ContextReceivedEventArgs : EventArgs
    {
        public ContextReceivedEventArgs(Context context)
        {
            if(context.Type.IndexOf("instrument") > -1)
            {
                var instrumentContext = new InstrumentContext
                {
                    Type = context.Type,
                    Name = context.Name,
                    Id = ((JsonElement)context.Id).Deserialize<Dictionary<string, string>>() ?? new Dictionary<string, string>()
                };
                InstrumentContext = instrumentContext;
            }
            else if (context.Type.IndexOf("fdc3.contact") > -1)
            {
 
                    var contactContext = new Fdc3ContactContext
                    {
                        Type = context.Type,
                        Name = context.Name
                    };
                    Fdc3ContactContext = contactContext;           
            }
            else if (context.Type.IndexOf("fdc3.organization") > -1)
            {
                var organizationContext = new Fdc3OrganizationContext
                {
                    Type = context.Type,
                    Name = context.Name
                };
                Fdc3OrganizationContext = organizationContext;
            }
        }

        public InstrumentContext InstrumentContext { get; protected set; }

        public Fdc3InstrumentContext Fdc3InstrumentContext { get; protected set; }

        public Fdc3ContactContext Fdc3ContactContext { get; protected set; }

        public Fdc3OrganizationContext Fdc3OrganizationContext { get; protected set; }
    }
}
