using Openfin.Desktop;
using Openfin.Desktop.InteropAPI;
using OpenFin.Interop.Win.Sample;
using System;
using System.Diagnostics;
using System.Threading;
using System.Windows;
using Newtonsoft.Json.Linq;



namespace interop_intents_v1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow: System.Windows.Window
    {

        readonly string _runtimeUUID = "wpf-interop-test";
        readonly OpenFinIntegration _openFin;
        readonly string _interopBrokerUUID = "workspace-platform-starter";

        public MainWindow()
        {
            InitializeComponent();
            txtMessages.Text = string.Empty;
            ShowMessage("Please ensure that you are running the how-to/workplace-platform-starter example from the Workspace starter repo.");
            ShowMessage("*******************************************************************************************************************************");
            ShowMessage("");

            _openFin = new OpenFinIntegration(_runtimeUUID);
            _openFin.RuntimeConnected += OpenFin_RuntimeConnected;
            _openFin.RuntimeDisconnected += OpenFin_RuntimeDisconnected;
            _openFin.InteropConnected += OpenFin_InteropConnected;
            _openFin.InteropContextReceived += OpenFin_InteropContextReceived;
            _openFin.IntentResultReceived += OpenFin_IntentResultReceived;
            _openFin.IntentRequestReceived += OpenFin_IntentRequestReceived;

            if(!_openFin._isRuntimeConnected)
            {
                try
                {
                    status.Content = "Connecting...";
                    ShowMessage("Connecting ...");

                    _openFin.ConnectToInteropBroker(_interopBrokerUUID, null);

                    status.Content = "Connected";
                    ShowMessage("Connected to OpenFin Runtime");
                    ConnectToBroker.IsEnabled = true;
                }
                catch (Exception ex)
                {
                    ConnectToBroker.IsEnabled = false;
                    ShowMessage("Unable to connect to OpenFin Runtime" + Environment.NewLine + ex.Message);
                }
            }
        }

        private async void connect_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                if (!_openFin._isRuntimeConnected)
                {
                    status.Content = "Connecting...";
                    ShowMessage("Connecting ...");

                    _openFin.ConnectToInteropBroker(_interopBrokerUUID, null);

                    status.Content = "Connected";
                    ShowMessage("Connected to OpenFin Runtime");
                    ConnectToBroker.IsEnabled = true;
                }
            }
            catch (Exception ex)
            {
                ConnectToBroker.IsEnabled = false;
                ShowMessage("Unable to connect to OpenFin Runtime" + Environment.NewLine + ex.Message);
            }

        }

        private void Runtime_Disconnected(object sender, EventArgs e)
        {
            Debug.WriteLine("Disconnected Event");
            ShowMessage("Disconnected Event");
        }

        private void Runtime_Connected(object sender, EventArgs e)
        {
            Debug.WriteLine("Connected Event");
            ShowMessage("Connected Event");
        }

        private async void disconnect_Click(object sender, RoutedEventArgs e)
        {
            status.Content = "Disconnecting...";
            ShowMessage("Disconnecting ...");
            _openFin.DisconnectFromRuntime();

            status.Content = "Disconnected";
            ShowMessage("Disconnected");
        }

        private async void ConnectToBroker_Click(object sender, RoutedEventArgs e)
        {
           

        }

        private async void FireIntent_Click(object sender, RoutedEventArgs e)
        {
            // Serialize the JObject to a JSON string to match the expected parameter type
            ShowMessage("Firing Intent: ViewChart with context: fdc3.instrument MSFT");
            var context = new JObject { { "type", "fdc3.instrument" }, { "id", new JObject { { "ticker", "MSFT" } } } };
            // _openFin.FireIntent("ViewChart", context.ToString());
            _openFin.FireIntent("Instrument", "MSFT");
        }

        private void ShowMessage(string message)
        {
            Dispatcher.Invoke(
                new ThreadStart(
                    () => txtMessages.Text += message + Environment.NewLine
                    )
            );            
        }

        private void OpenFin_RuntimeConnected(object sender, EventArgs e)
        {
            ShowMessage("OpenFin Connected");
            ShowMessage("OpenFin Runtime Connected using UUID: " + _runtimeUUID);
        }

        private void OpenFin_RuntimeDisconnected(object sender, EventArgs e)
        {

            ShowMessage("OpenFin Disconnected");

            ShowMessage("OpenFin Runtime Disconnected");
        }

        private void OpenFin_InteropConnected(object sender, EventArgs e)
        {
            ShowMessage("Interop Connected");

            ShowMessage("Request to auto register intent handlers has been sent via the commandline.");
            RegisterIntent("Instrument");
            RegisterIntent("Contact");
            RegisterIntent("Organization");

            ShowMessage("Connected to InteropBroker");
        }

        private async void RegisterIntent(string contextType)
        {
            ShowMessage($"Registering intent handler for context type: {contextType}");
            var result = await _openFin.RegisterIntent(contextType);
            ShowMessage(result);
        }

        private void OpenFin_InteropContextReceived(object sender, ContextReceivedEventArgs e)
        {
            
            var contextReceived = "Unknown Context Received";
            ShowMessage("Context received.");
            if (e.Fdc3InstrumentContext != null)
            {
                contextReceived = e.Fdc3InstrumentContext.Id["ticker"];
                ShowMessage(contextReceived);
                ShowMessage("Received an fdc3.instrument object. Ticker: " + contextReceived);
            }
            if (e.Fdc3ContactContext != null)
            {
                contextReceived = e.Fdc3ContactContext.Name;
                ShowMessage(contextReceived);
                ShowMessage("Received an fdc3.contact object. Name: " + contextReceived);
            }
            if (e.Fdc3OrganizationContext != null)
            {
                contextReceived = e.Fdc3OrganizationContext.Name;
                ShowMessage(contextReceived);
                ShowMessage("Received an fdc3.organization object. Name: " + contextReceived);
            }

        }


        private void OpenFin_IntentRequestReceived(object sender, IntentContextReceivedEventArgs e)
        {
            Dispatcher.Invoke(new ThreadStart(
                () =>
                {
                    var intentNameReceived = "Unknown Intent Raised";
                    var contextType = "Unknown";
                    var contextReceived = "Unknown Context Received";

                    ShowMessage("Intent received.");

                    if (e.IntentName != null)
                    {
                        intentNameReceived = e.IntentName;
                        ShowMessage(intentNameReceived);
                    }
                    if (e.Fdc3InstrumentContext != null)
                    {
                        contextReceived = e.Fdc3InstrumentContext.Id["ticker"];
                        ShowMessage(contextReceived);
                        contextType = e.Fdc3InstrumentContext.Type;
                    }
                    if (e.Fdc3ContactContext != null)
                    {
                        contextReceived = e.Fdc3ContactContext.Name;
                        ShowMessage(contextReceived);
                        contextType = e.Fdc3ContactContext.Type;
                    }
                    if (e.Fdc3OrganizationContext != null)
                    {
                        contextReceived = e.Fdc3OrganizationContext.Name;
                        ShowMessage(contextReceived);
                        contextType = e.Fdc3OrganizationContext.Type;
                    }
                    ShowMessage($"Received an intent request of type: {intentNameReceived} with context object of type: {contextType} containing value: {contextReceived}");
                }
             ));
        }

        private void OpenFin_IntentResultReceived(object sender, IntentResolutionReceivedEventArgs e)
        {
            if (e.IsDismissed)
            {
                ShowMessage("Intent Cancelled");
                ShowMessage("Fired Intent Request Cancelled.");
            }
            else
            {
                ShowMessage($"Intent Resolution Source: {e.Source}");
                ShowMessage($"Intent Resolution Source: {e.Source} Version: {(string.IsNullOrWhiteSpace(e.Version) ? "n/a" : e.Version)}");
            }
        }
    }
}
