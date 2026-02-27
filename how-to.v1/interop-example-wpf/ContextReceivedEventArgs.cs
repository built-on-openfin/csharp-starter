using interop_intents_v1.FDC3.Context;
using Newtonsoft.Json.Linq;
using Openfin.Desktop.InteropAPI;
using System;
using System.Collections.Generic;

namespace OpenFin.Interop.Win.Sample
{
    public class ContextReceivedEventArgs : EventArgs
    {
        public ContextReceivedEventArgs(Context context)
        {
            try
            {
                if (context.Type.IndexOf("fdc3.instrument") > -1)
                {
                    try
                    {
                        var instrumentContext = new Instrument
                        {
                            Type = context.Type,
                            Name = context.Name,
                            Id = (context.Id as JObject).ToObject<Dictionary<string, string>>()
                        };
                        Fdc3InstrumentContext = instrumentContext;
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine("Error creating Instrument context: " + ex.Message);
                    }
                }
                else if (context.Type.IndexOf("fdc3.contact") > -1)
                {
                    try
                    {
                        var contactContext = new Contact
                        {
                            Type = context.Type,
                            Name = context.Name
                        };
                        Fdc3ContactContext = contactContext;
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine("Error creating Contact context: " + ex.Message);
                    }
                }
                else if (context.Type.IndexOf("fdc3.organization") > -1)
                {
                    try
                    {
                        var organizationContext = new Organization
                        {
                            Type = context.Type,
                            Name = context.Name
                        };
                        Fdc3OrganizationContext = organizationContext;
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine("Error creating Organization context: " + ex.Message);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error in ContextReceivedEventArgs constructor: " + ex.Message);
            }
        }

        public Instrument Fdc3InstrumentContext { get; protected set; }

        public Contact Fdc3ContactContext { get; protected set; }

        public Organization Fdc3OrganizationContext { get; protected set; }
    }
}