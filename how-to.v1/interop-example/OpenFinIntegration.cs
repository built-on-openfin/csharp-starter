using Openfin.Desktop;
using Openfin.Desktop.InteropAPI;
using OpenFin.Interop.Win.Sample.FDC3.Context;
using OpenFin.Interop.Win.Sample.FDC3.Intent;
using System;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace OpenFin.Interop.Win.Sample
{
    class OpenFinIntegration
    {
        private string DotNetUuid;

        private readonly Runtime _runtime;
        private InteropClient _interopClient;
        private DataSource _dataSource;
        private bool _viewContactRegistered;
        private bool _viewNewsRegistered;
        private bool _viewInstrumentRegistered;

        public RuntimeOptions DotNetOptions { get; }

        public OpenFinIntegration(string uuid = null)
        {
            _dataSource = new DataSource();

            if(uuid != null)
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

        public event EventHandler RuntimeConnected;
        public event EventHandler RuntimeDisconnected;
        public event EventHandler InteropConnected;
        public event EventHandler<ContextReceivedEventArgs> InteropContextReceived;
        public event EventHandler<InteropContextGroupsReceivedEventArgs> InteropContextGroupsReceived;
        public event EventHandler<IntentResolutionReceivedEventArgs> IntentResultReceived;
        public event EventHandler<IntentContextReceivedEventArgs> IntentRequestReceived;

        private async Task<InteropClient> ConnectAsync(string brokerName)
        {
            return await _runtime.Interop.ConnectAsync(brokerName).ConfigureAwait(true);
        }

        private async Task ConnectInteropClient(string brokerName)
        {
            _interopClient = await ConnectAsync(brokerName);
            await _interopClient.AddContextHandlerAsync(ctx =>
            {
                Console.WriteLine("Interop Context Received!");
                InteropContextReceived?.Invoke(this, new ContextReceivedEventArgs(ctx));
            });
            var contextGroups = await _interopClient.GetContextGroupsAsync();
            var contextGroupIds = contextGroups.Select(group => group.Id).ToArray();
            InteropContextGroupsReceived?.Invoke(this, new InteropContextGroupsReceivedEventArgs(contextGroupIds));
            InteropConnected?.Invoke(this, EventArgs.Empty);
        }
 
        private void Runtime_Disconnected(object sender, EventArgs e)
        {
            RuntimeDisconnected?.Invoke(this, EventArgs.Empty);
        }

        private T GetContext<T>(string contextType, string contextValue) where T : ContextBase, new()
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
                contactContext.Id.Add("email", _dataSource.GetEmail(contextValue));
                return (T)(contactContext as ContextBase);
            }

            if (contextType == "Organization")
            {
                var organizationContext = new Organization();
                organizationContext.Name = contextValue;
                organizationContext.Id.Add("PERMID", _dataSource.GetCompanyId(contextValue));
                return (T)(organizationContext as ContextBase);
            }

            return null;
        }
        private async void FireSelectedIntent(Intent intent)
        {
            try
            {
                // Invoke the intent
                var result = await _interopClient.FireIntentAsync(intent);

                IntentResultReceived?.Invoke(this, new IntentResolutionReceivedEventArgs(result));

            }
            catch
            {
                Console.WriteLine("Resolver Timeout - User has likely dismissed the target selection dialog");
                IntentResultReceived?.Invoke(this, new IntentResolutionReceivedEventArgs());
            }
        }

        public void SendBroadcast(string item, string contextType)
        {
            _interopClient.SetContextAsync(GetContext<ContextBase>(contextType, item));
        }

        public async void LeaveContextGroup()
        {
            await _interopClient.RemoveFromContextGroupAsync();
        }

        public async void ConnectToContextGroup(string contextGroupId)
        {
            await _interopClient.JoinContextGroupAsync(contextGroupId);
        }

        public void ConnectToInteropBroker(string broker)
        {
            // Launch and Connect to the OpenFin Runtime
            // If already connected, callback executes immediately
            _runtime.Connect(async () =>
            {
                Console.WriteLine("Runtime object connected!");
                RuntimeConnected?.Invoke(this, EventArgs.Empty);

                await ConnectInteropClient(broker);
            });
        }

        public string FireIntent(string contextType, string contextValue)
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

            return "Unknown";
        }

        public async Task<string> RegisterIntent(string contextType)
        {
            string intentName = null;

            if (contextType == "Contact")
            {
                if(_viewContactRegistered)
                {
                    return "ViewContact Intent Handler already registered.";
                } else
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

            if (intentName != null) {
                try
                {
                    await _interopClient.RegisterIntentHandlerAsync((passedIntent) =>
                    {
                        Console.WriteLine("Intent Received" + passedIntent.Name);
                        IntentRequestReceived?.Invoke(this, new IntentContextReceivedEventArgs(passedIntent.Context, passedIntent.Name));
                    }, intentName);
                    return intentName + " Intent Handler registered.";

                }
                catch(Exception e)
                {
                    Console.WriteLine("Error on intent registration.");
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
    }
}
