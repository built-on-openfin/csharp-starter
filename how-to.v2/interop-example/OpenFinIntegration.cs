using Newtonsoft.Json;
using OpenFin.Net.Adapter;
using OpenFin.Net.Adapter.Interfaces;
using OpenFin.Net.Adapter.Interop;
using System;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace OpenFin.Interop.Win.Sample
{
    class OpenFinIntegration
    {
        private string DotNetUuid;

        private readonly IRuntime _runtime;
        private IInterop _interop;
        private IInteropClient _interopClient;
        private IInteropBroker _interopBroker;
        private DataSource _dataSource;

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

            var factory = new RuntimeFactory();

            _runtime = factory.GetRuntimeInstance(DotNetOptions); 

             _interop = _runtime.GetService<IInterop>();            
       
            _runtime.Disconnected += Runtime_Disconnected;
        }

        public event EventHandler RuntimeConnected;
        public event EventHandler RuntimeDisconnected;
        public event EventHandler InteropConnected;
        public event EventHandler<ContextReceivedEventArgs> InteropContextReceived;
        public event EventHandler<InteropContextGroupsReceivedEventArgs> InteropContextGroupsReceived;
        public event EventHandler<IntentResolutionReceivedEventArgs> IntentResultReceived;

        private async Task<IInteropClient> ConnectAsync(string brokerName)
        {
            _interopClient = await _interop.ConnectAsync(brokerName);
            await _interopClient.JoinContextGroupAsync("green");

            await _interopClient.AddContextHandlerAsync(ctx =>
            {
                Debug.WriteLine($"Interop Context Received! {ctx.Name}");
            });

            return _interopClient;
        }

        private async Task<IInteropBroker> CreateAsync(string brokerName)
        {
            _interopBroker = await CreateAsync(brokerName);

            await ConnectInteropClient(brokerName);

            return _interopBroker;
        }

        private async Task ConnectInteropClient(string brokerName)
        {
            _interopClient = await ConnectAsync(brokerName);

            await _interopClient.AddContextHandlerAsync(ctx => {
                Console.WriteLine("Interop Context Received!");
                InteropContextReceived?.Invoke(this, new ContextReceivedEventArgs(ctx));
            });
            
            // TODO: What does this do?
            // var c = _runtime.WrapApplication("openfin-browser");
            
            var contextGroups = await _interopClient.GetContextGroupsAsync();
            var contextGroupIds = contextGroups.Select(group => group.Id).ToArray();
            InteropContextGroupsReceived?.Invoke(this, new InteropContextGroupsReceivedEventArgs(contextGroupIds));
            InteropConnected?.Invoke(this, EventArgs.Empty);
        }

        public void SendBroadcast(string item, string contextType)
        {
            if(contextType == "Instrument")
            {
                var instrumentContext = new InstrumentContext();
                var fdc3InstrumentContext = new Fdc3InstrumentContext();
                instrumentContext.Id.Add("ticker", item);
                fdc3InstrumentContext.Id.Add("ticker", item);
                _interopClient.SetContextAsync(instrumentContext);
                _interopClient.SetContextAsync(fdc3InstrumentContext);
            }

            if (contextType == "Contact")
            {
                var contactContext = new Fdc3ContactContext();
                contactContext.Name = item;
                contactContext.Id.Add("email", _dataSource.GetEmail(item));
                _interopClient.SetContextAsync(contactContext);
            }

            if (contextType == "Organization")
            {
                var organizationContext = new Fdc3OrganizationContext();
                organizationContext.Name = item;
                organizationContext.Id.Add("PERMID", _dataSource.GetCompanyId(item));
                _interopClient.SetContextAsync(organizationContext);
            }
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
            _runtime.Connected += async (sender, args) =>
            {
                Console.WriteLine("Runtime object connected!");
                RuntimeConnected?.Invoke(sender, EventArgs.Empty);

                _interopBroker = await CreateAsync(broker);

                await ConnectInteropClient(broker);
            };

            _runtime.ConnectAsync();
        }

        public void CreateInteropBroker(string broker)
        {
            // Launch and Connect to the OpenFin Runtime
            // If already connected, callback executes immediately
            _runtime.Connected += async (sender, args) =>
            {
                Console.WriteLine("Runtime object connected!");
                RuntimeConnected?.Invoke(sender, EventArgs.Empty);

                _interopBroker = await CreateAsync(broker);

                await ConnectInteropClient(broker);
            };

            _runtime.ConnectAsync();
        }

        private void Runtime_Disconnected(object sender, EventArgs e)
        {
            RuntimeDisconnected?.Invoke(this, EventArgs.Empty);
        }

        public async void FireIntent(string contactName)
        {
            // Build out intent payload by deserializing a standard FDC3 payload
            var intent = JsonConvert.DeserializeObject<Intent>(@$"{{
                'name': 'StartCall',
                'context': {{
                     'type': 'fdc3.contact',
                     'name': '{contactName}',
                     'id': {{
                                'email': '{_dataSource.GetEmail(contactName)}'
                     }}
                        }}
                }}");

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
    }
}
