using OpenFin.Net.Adapter;
using OpenFin.Net.Adapter.Interop;
using System;
using System.Diagnostics;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace OpenFin.Interop.Win.Sample
{
    class OpenFinIntegration
    {
        #region Private Fields

        private readonly IRuntime _runtime;
        private readonly DataSource _dataSource;
        private IInterop? _interop;
        private IInteropClient? _interopClient;
        private IInteropBroker? _interopBroker;

        #endregion

        #region Construction

        public OpenFinIntegration(string? uuid = null)
        {
            string dotNetUuid;
            _dataSource = new DataSource();

            if(uuid == null)
            {
                int count = Process.GetProcessesByName(Process.GetCurrentProcess().ProcessName).Length;
                uuid = "interop-winform-sample-" + count;
            }

            RuntimeOptions = new RuntimeOptions()
            {
                UUID = uuid,
                Version = "stable"
            };

            var factory = new RuntimeFactory();

            _runtime = factory.GetRuntimeInstance(RuntimeOptions);
            _runtime.Disconnected += OnRuntimeDisconnected;
            _runtime.Connected += OnRuntimeConnected;
        }

        #endregion

        #region Public Events

        public event EventHandler RuntimeConnected = delegate { };
        public event EventHandler RuntimeDisconnected = delegate { };
        public event EventHandler InteropClientConnected = delegate { };
        public event EventHandler<ContextReceivedEventArgs> InteropContextReceived = delegate { };
        public event EventHandler<InteropContextGroupsReceivedEventArgs> InteropContextGroupsReceived = delegate { };
        public event EventHandler<IntentResolutionReceivedEventArgs> IntentResultReceived = delegate { };

        #endregion

        #region Public Properties

        public RuntimeOptions RuntimeOptions { get; }

        #endregion

        #region Public Methods

        public void SendBroadcast(string item, string contextType)
        {
            AssertInteropClient();
            switch (contextType)
            {
                case "Instrument":
                    var instrumentContext = new InstrumentContext();
                    var fdc3InstrumentContext = new Fdc3InstrumentContext();
                    instrumentContext.Id.Add("ticker", item);
                    fdc3InstrumentContext.Id.Add("ticker", item);
                    _interopClient!.SetContextAsync(instrumentContext);
                    _interopClient!.SetContextAsync(fdc3InstrumentContext);
                    break;
                case "Contact":
                    var contactContext = new Fdc3ContactContext();
                    contactContext.Name = item;
                    contactContext.Id.Add("email", _dataSource.GetEmail(item));
                    _interopClient!.SetContextAsync(contactContext);
                    break;
                case "Organization":
                    var organizationContext = new Fdc3OrganizationContext();
                    organizationContext.Name = item;
                    organizationContext.Id.Add("PERMID", _dataSource.GetCompanyId(item));
                    _interopClient!.SetContextAsync(organizationContext);
                    break;

            }
        }

        public async Task CreateInteropBroker(string broker)
        {
            EnsureRuntimeConnected();
            _interopBroker = await _interop!.CreateAsync(broker); 
            throw new NotSupportedException("The V2 adapter does not currently support creating interop brokers");
            // TODO: The need to implement this once the IInteropBroker interface is completed in the adapter 
        }

        public async Task CreateInteropClient(string brokerName)
        {
            EnsureRuntimeConnected();
            _interopClient = await _interop!.ConnectAsync(brokerName);
            await _interopClient.AddContextHandlerAsync(ctx =>
            {
                Debug.WriteLine($"Interop Context Received! {ctx.Name}");
                InteropContextReceived(this, new ContextReceivedEventArgs(ctx));
            });
            _interopClient.GetContextGroupsAsync().ContinueWith(t =>
            {
                var contextGroups = t.Result;
                var contextGroupIds = contextGroups.Select(group => group.Id).ToArray();
                InteropContextGroupsReceived(this, new InteropContextGroupsReceivedEventArgs(contextGroupIds));
            });
            
            
            InteropClientConnected(this, EventArgs.Empty);
        }

        public async void LeaveContextGroup()
        {
            AssertInteropClient();
            await _interopClient!.RemoveFromContextGroupAsync();
        }

        public async void ConnectToContextGroup(string contextGroupId)
        {
            AssertInteropClient();
            await _interopClient!.JoinContextGroupAsync(contextGroupId);
        }

        public async void FireIntent(string contactName)
        {
            // Build out intent payload by deserializing a standard FDC3 payload
            var intent = JsonSerializer.Deserialize<Intent>(@$"{{
                ""name"": ""StartCall"",
                ""context"": {{
                     ""type"": ""fdc3.contact"",
                     ""name"": ""{contactName}"",
                     ""id"": {{
                                ""email"": ""{_dataSource.GetEmail(contactName)}""
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

        #endregion

        #region Private Methods

        private void EnsureRuntimeConnected()
        {
            if (!_runtime.IsConnected || _interop == null)
            {
                _runtime.ConnectAsync().Wait();
                _interop = _runtime.GetService<IInterop>();
            }
        }

        private void AssertInteropClient()
        {
            if (_interopClient == null)
                throw new InvalidOperationException("The interop client is not initialised");
        }

        private void OnRuntimeConnected(object? sender, EventArgs e)
        {
            Console.WriteLine("Runtime object connected!");
            RuntimeConnected(sender, EventArgs.Empty);
        }

        private void OnRuntimeDisconnected(object? sender, EventArgs e)
        {
            RuntimeDisconnected(this, EventArgs.Empty);
            _interop = null;
            _interopBroker = null;
            _interopClient = null;
        }

        #endregion
    }
}
