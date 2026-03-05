using Openfin.Desktop;
using Openfin.Desktop.InteropAPI;
using interop_intents_v1.FDC3.Context;
using interop_intents_v1.FDC3.Intent;
using System;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using OpenFin.Interop.Win.Sample.FDC3.Intent;

namespace OpenFin.Interop.Win.Sample
{
    class OpenFinIntegration
    {
        private string DotNetUuid;

        private readonly Runtime _runtime;
        private InteropClient _interopClient;
        private bool _viewContactRegistered;
        private bool _viewNewsRegistered;
        private bool _viewInstrumentRegistered;
        public bool _isRuntimeConnected;

        public RuntimeOptions DotNetOptions { get; }

        public OpenFinIntegration(string uuid = null)
        {
            try
            {
                if (uuid != null)
                {
                    DotNetUuid = uuid;
                }
                else
                {
                    int count = Process.GetProcessesByName(Process.GetCurrentProcess().ProcessName).Length;
                    DotNetUuid = "interop-winform-sample-" + count;
                }

                DotNetOptions = new RuntimeOptions()
                {
                    UUID = DotNetUuid,
                    Version = "stable"
                };

                _runtime = Runtime.GetRuntimeInstance(DotNetOptions);

                _runtime.Disconnected += Runtime_Disconnected;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error initializing OpenFinIntegration: " + ex.Message);
            }
        }

        public event EventHandler RuntimeConnected;
        public event EventHandler RuntimeDisconnected;
        public event EventHandler InteropConnected;
        public event EventHandler<ContextReceivedEventArgs> InteropContextReceived;
        public event EventHandler<InteropContextGroupsReceivedEventArgs> InteropContextGroupsReceived;
        public event EventHandler<IntentResolutionReceivedEventArgs> IntentResultReceived;
        public event EventHandler<IntentContextReceivedEventArgs> IntentRequestReceived;

        private async Task<InteropClient> ConnectAsync(string brokerName, object fdc3Payload)
        {
            try
            {
                if (fdc3Payload != null)
                    return await _runtime.Interop.ConnectAsync(brokerName, fdc3Payload).ConfigureAwait(true);
                else
                    return await _runtime.Interop.ConnectAsync(brokerName).ConfigureAwait(true);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error connecting to Interop broker: " + ex.Message);
                return null;
            }
        }

        private async Task ConnectInteropClient(string brokerName, object fdc3Payload)
        {
            try
            {
                _interopClient = await ConnectAsync(brokerName, fdc3Payload);
                if (_interopClient == null)
                {
                    Console.WriteLine("InteropClient is null after connection attempt.");
                    return;
                }

                await _interopClient.AddContextHandlerAsync(ctx =>
                {
                    try
                    {
                        Console.WriteLine("Interop Context Received!");
                        InteropContextReceived?.Invoke(this, new ContextReceivedEventArgs(ctx));
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine("Error in context handler: " + ex.Message);
                    }
                });

                var contextGroups = await _interopClient.GetContextGroupsAsync();
                var contextGroupIds = contextGroups.Where(group => group.DisplayMetadata.Color != null).Select(group => group.Id).ToArray();
                InteropContextGroupsReceived?.Invoke(this, new InteropContextGroupsReceivedEventArgs(contextGroupIds));
                InteropConnected?.Invoke(this, EventArgs.Empty);
                _isRuntimeConnected = true;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error connecting InteropClient: " + ex.Message);
            }
        }

        public void DisconnectFromRuntime()
        {
            try
            {
                _runtime.Disconnect(() => { });
                _isRuntimeConnected = false;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error disconnecting from runtime: " + ex.Message);
            }
        }

        private void Runtime_Disconnected(object sender, EventArgs e)
        {
            try
            {
                RuntimeDisconnected?.Invoke(this, EventArgs.Empty);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error in Runtime_Disconnected event: " + ex.Message);
            }
        }

        private T GetContext<T>(string contextType, string contextValue) where T : ContextBase, new()
        {
            try
            {
                if (contextType == "Instrument")
                {
                    var instrumentContext = new Instrument();
                    instrumentContext.Id.Add("ticker", contextValue);
                    return (T)(instrumentContext as ContextBase);
                }

                if (contextType == "Contact")
                {
                    var contactContext = new Contact();
                    contactContext.Name = contextValue;
                    contactContext.Id.Add("email", contextValue);
                    return (T)(contactContext as ContextBase);
                }

                if (contextType == "Organization")
                {
                    var organizationContext = new Organization();
                    organizationContext.Name = contextValue;
                    organizationContext.Id.Add("PERMID", contextValue);
                    return (T)(organizationContext as ContextBase);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error creating context: " + ex.Message);
            }

            return null;
        }

        private async void FireSelectedIntent(Intent intent)
        {
            try
            {
                var result = await _interopClient.FireIntentAsync(intent);
                IntentResultReceived?.Invoke(this, new IntentResolutionReceivedEventArgs(result));
            }
            catch (Exception ex)
            {
                Console.WriteLine("Resolver Timeout or error firing intent: " + ex.Message);
                IntentResultReceived?.Invoke(this, new IntentResolutionReceivedEventArgs());
            }
        }

        public void SendBroadcast(string item, string contextType)
        {
            try
            {
                _interopClient.SetContextAsync(GetContext<ContextBase>(contextType, item));
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error broadcasting context: " + ex.Message);
            }
        }

        public async void LeaveContextGroup()
        {
            try
            {
                await _interopClient.RemoveFromContextGroupAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error leaving context group: " + ex.Message);
            }
        }

        public async void ConnectToContextGroup(string contextGroupId)
        {
            try
            {
                await _interopClient.JoinContextGroupAsync(contextGroupId);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error joining context group: " + ex.Message);
            }
        }

        public void ConnectToInteropBroker(string broker, object fdc3Payload = null)
        {
            try
            {
                _runtime.Connect(async () =>
                {
                    try
                    {
                        Console.WriteLine("Runtime object connected!");
                        RuntimeConnected?.Invoke(this, EventArgs.Empty);

                        await ConnectInteropClient(broker, fdc3Payload);
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine("Error in runtime connect callback: " + ex.Message);
                    }
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error connecting to Interop broker: " + ex.Message);
            }
        }

        public string FireIntent(string contextType, string contextValue)
        {
            try
            {
                if (contextType == "Instrument")
                {
                    var viewInstrument = new ViewInstrument
                    {
                        Context = GetContext<Instrument>(contextType, contextValue)
                    };
                    FireSelectedIntent(viewInstrument);
                    return viewInstrument.Name;
                }

                if (contextType == "Contact")
                {
                    var viewContact = new ViewContact
                    {
                        Context = GetContext<Contact>(contextType, contextValue)
                    };
                    FireSelectedIntent(viewContact);
                    return viewContact.Name;
                }

                if (contextType == "Organization")
                {
                    var viewNews = new ViewNews
                    {
                        Context = GetContext<Organization>(contextType, contextValue)
                    };
                    FireSelectedIntent(viewNews);
                    return viewNews.Name;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error firing intent: " + ex.Message);
            }

            return "Unknown";
        }

        public async Task<string> RegisterIntent(string contextType)
        {
            string intentName = null;

            try
            {
                if (contextType == "Contact")
                {
                    if (_viewContactRegistered)
                    {
                        return "ViewContact Intent Handler already registered.";
                    }
                    else
                    {
                        intentName = "ViewContact";
                        _viewContactRegistered = true;
                    }
                }
                if (contextType == "Instrument")
                {
                    if (_viewInstrumentRegistered)
                    {
                        return "ViewInstrument Intent Handler already registered.";
                    }
                    else
                    {
                        intentName = "ViewInstrument";
                        _viewInstrumentRegistered = true;
                    }
                }
                if (contextType == "Organization")
                {
                    if (_viewNewsRegistered)
                    {
                        return "ViewNews Intent Handler already registered";
                    }
                    else
                    {
                        intentName = "ViewNews";
                        _viewNewsRegistered = true;
                    }
                }

                if (intentName != null)
                {
                    try
                    {
                        Console.WriteLine("Registering intent for : " + intentName);
                        await _interopClient.RegisterIntentHandlerAsync((passedIntent) =>
                        {
                            try
                            {
                                Console.WriteLine("Intent Received" + passedIntent.Name);
                                IntentRequestReceived?.Invoke(this, new IntentContextReceivedEventArgs(passedIntent.Context, passedIntent.Name));
                            }
                            catch (Exception ex)
                            {
                                Console.WriteLine("Error in intent handler: " + ex.Message);
                            }
                        }, intentName);
                        return intentName + " Intent Handler registered.";
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine("Error on intent registration: " + e.Message);
                        IntentResultReceived?.Invoke(this, new IntentResolutionReceivedEventArgs());
                        return intentName + " Intent Handler could not be registered because of an error: " + e.Message;
                    }
                }
                else
                {
                    Console.WriteLine("Context Type: " + contextType + " is not supported");
                    return "Unable to find an intent type for context type: " + contextType;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error in RegisterIntent: " + ex.Message);
                return "Error registering intent: " + ex.Message;
            }
        }
    }
}
