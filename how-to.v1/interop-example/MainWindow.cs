using System;
using System.Windows.Forms;

namespace OpenFin.Interop.Win.Sample
{
    public partial class MainWindow : Form
    {
        readonly OpenFinIntegration _openFin;
        readonly DataSource _dataSource;
        bool _joinedContextGroup;
        readonly string _runtimeUUID;
        readonly string _interopBrokerUUID;
        readonly bool _registerIntents;

        public MainWindow()
        {
            InitializeComponent();

            _dataSource = new DataSource();
            ContextItemComboBox.SelectedIndex = 0;
            contextGroupComboBox.SelectedIndex = 0;
            contextTypeDropDown.SelectedIndex = 0;
            FDCVersionDropDown.SelectedIndex = 2;

            // OpenFin Integration
            interopBrokerInput.Text = CommandLineOptions.GetSpecifiedWorkspaceUUID() ?? "workspace-platform-starter";
            _interopBrokerUUID = CommandLineOptions.GetSpecifiedWorkspaceUUID();
            _runtimeUUID = CommandLineOptions.GetSpecifiedNativeUUID() ?? "winform-interop-example" + "/" + Guid.NewGuid().ToString();
            _registerIntents = CommandLineOptions.GetRegisterIntents();
            Log("Setting up runtime connection using UUID: " + _runtimeUUID);

            _openFin = new OpenFinIntegration(_runtimeUUID); 
            _openFin.RuntimeConnected += OpenFin_RuntimeConnected;
            _openFin.RuntimeDisconnected += OpenFin_RuntimeDisconnected;
            _openFin.InteropConnected += OpenFin_InteropConnected;
            _openFin.InteropContextReceived += OpenFin_InteropContextReceived;
            _openFin.InteropContextGroupsReceived += OpenFin_InteropContextGroupsReceived;
            _openFin.IntentResultReceived += OpenFin_IntentResultReceived;
            _openFin.IntentRequestReceived += OpenFin_IntentRequestReceived;
            if(_interopBrokerUUID == null)
            {
                Log("Runtime connection will be established when you try to connect to a broker. Please add the UUID of the platform you wish to connect to in the Interop Broker textbox and click connect. Clicking connect without a value will try to connect to the UUID of our workspace platform starter.");
            } 
            else
            {
                connectToBrokerButton.Enabled = true;
                Log("Interop Broker specified via the command line. Auto connecting to: " + _interopBrokerUUID);
                Log("Connecting to broker: " + _interopBrokerUUID);
                Log("Please wait...");

                var fdc3VersionPayload = new { type = "fdc3", version = FDCVersionDropDown.SelectedItem}; // or 2.0

               // _openFin.ConnectToInteropBroker(_interopBrokerUUID, fdc3VersionPayload);
            }
        }

        private void SubmitContextButton_Click(object sender, EventArgs e)
        {
            Log("Submitting Context: Information: " + ContextItemComboBox.SelectedItem.ToString() + " Context Type: " + contextTypeDropDown.SelectedItem.ToString());
            _openFin.SendBroadcast(ContextItemComboBox.SelectedItem.ToString(), contextTypeDropDown.SelectedItem.ToString());
        }

        private void ConnectToBrokerButton_Click(object sender, EventArgs e)
        {
            var broker = interopBrokerInput.Text;
            if (broker == "")
            {
                broker = "workspace-platform-starter";
                interopBrokerInput.Text = broker;
            }
            Log("Connecting to broker: " + broker);
            Log("Please wait...");

            var fdc3VersionPayload = new { type = "fdc3", version = FDCVersionDropDown.SelectedItem };

            if(FDCVersionDropDown.SelectedIndex > 0)
                _openFin.ConnectToInteropBroker(broker, fdc3VersionPayload);
            else
                _openFin.ConnectToInteropBroker(broker);
        }

        private void RefreshUI()
        {
            ContextInputLabel.Text = contextTypeDropDown.SelectedItem as string;

            switch (contextTypeDropDown.SelectedItem)
            {
                case "Instrument":
                    {
                        ContextItemComboBox.DataSource = _dataSource.Instruments.DataSource;
                        fireIntent.Enabled = (!connectToBrokerButton.Enabled);
                        registerIntent.Enabled = (!connectToBrokerButton.Enabled);
                        break;
                    }
                case "Contact":
                    {
                        ContextItemComboBox.DataSource = _dataSource.Contacts.DataSource;

                        fireIntent.Enabled = (!connectToBrokerButton.Enabled);
                        registerIntent.Enabled = (!connectToBrokerButton.Enabled);
                        break;
                    }
                case "Organization":
                    {
                        ContextItemComboBox.DataSource = _dataSource.Organizations.DataSource;

                        fireIntent.Enabled = (!connectToBrokerButton.Enabled);
                        registerIntent.Enabled = (!connectToBrokerButton.Enabled);
                        break;
                    }
            }
        }

        #region OpenFin Events

        private void OpenFin_RuntimeConnected(object sender, EventArgs e)
        {
            Invoke(new Action(() => openFinStatusLabel.Text = "OpenFin Connected"));
            Log("OpenFin Runtime Connected using UUID: " + _runtimeUUID);

            if(_interopBrokerUUID == null)
            {
                connectToBrokerButton.Enabled = true;
            }
        }

        private void OpenFin_RuntimeDisconnected(object sender, EventArgs e)
        {
            Invoke(new Action(() =>
            {
                openFinStatusLabel.Text = "OpenFin Disconnected";
                connectToBrokerButton.Enabled = false;
            }));
            Log("OpenFin Runtime Disconnected");
        }

        private void OpenFin_InteropConnected(object sender, EventArgs e)
        {
            Invoke(new Action(() =>
            {
                openFinStatusLabel.Text = "Interop Connected";
                connectToBrokerButton.Enabled = false;
                interopBrokerInput.Enabled = false;
                if(_registerIntents)
                {
                    Log("Request to auto register intent handlers has been sent via the commandline.");
                    RegisterIntent("Instrument");
                    RegisterIntent("Contact");
                    RegisterIntent("Organization");
                }
                RefreshUI();
            }));
            Log("Connected to InteropBroker");
            Invoke(new Action(() =>
            {
                FDCVersionDropDown.Enabled = false;
            }));
        }

        private void OpenFin_InteropContextReceived(object sender, ContextReceivedEventArgs e)
        {
            Invoke(new Action(() =>
            {
                var contextReceived = "Unknown Context Received";
                if (e.Fdc3InstrumentContext != null)
                {
                    contextReceived = e.Fdc3InstrumentContext.Id["ticker"];
                    receivedContext.Text = contextReceived;
                    Log("Received an fdc3.instrument object. Ticker: " + contextReceived);
                }
                if (e.Fdc3ContactContext != null)
                {
                    contextReceived = e.Fdc3ContactContext.Name;
                    receivedContext.Text = contextReceived;
                    Log("Received an fdc3.contact object. Name: " + contextReceived);
                }
                if (e.Fdc3OrganizationContext != null)
                {
                    contextReceived = e.Fdc3OrganizationContext.Name;
                    receivedContext.Text = contextReceived;
                    Log("Received an fdc3.organization object. Name: " + contextReceived);
                }
            }));
        }

        private void OpenFin_IntentRequestReceived(object sender, IntentContextReceivedEventArgs e)
        {
            Invoke(new Action(() =>
            {
                var intentNameReceived = "Unknown Intent Raised";
                var contextType = "Unknown";

                var contextReceived = "Unknown Context Received";
                if (e.IntentName != null)
                {
                    intentNameReceived = e.IntentName;
                    receivedIntentValue.Text = intentNameReceived;
                }
                if (e.Fdc3InstrumentContext != null)
                {
                    contextReceived = e.Fdc3InstrumentContext.Id["ticker"];
                    receivedContext.Text = contextReceived;
                    contextType = e.Fdc3InstrumentContext.Type;
                }
                if (e.Fdc3ContactContext != null)
                {
                    contextReceived = e.Fdc3ContactContext.Name;
                    receivedContext.Text = contextReceived;
                    contextType = e.Fdc3ContactContext.Type;
                }
                if (e.Fdc3OrganizationContext != null)
                {
                    contextReceived = e.Fdc3OrganizationContext.Name;
                    receivedContext.Text = contextReceived;
                    contextType = e.Fdc3OrganizationContext.Type;
                }
                Log($"Received an intent request of type: {intentNameReceived} with context object of type: {contextType} containing value: {contextReceived}");
            }));
        }

        private void OpenFin_IntentResultReceived(object sender, IntentResolutionReceivedEventArgs e)
        {
            if (e.IsDismissed)
            {
                receivedContext.Text = "Intent Cancelled";
                Log("Fired Intent Request Cancelled.");
            }
            else
            {
                receivedContext.Text = $"Intent Resolution Source: {e.Source}";
                Log($"Intent Resolution Source: {e.Source} Version: {(string.IsNullOrWhiteSpace(e.Version) ? "n/a" : e.Version)}");
            }
        }

        private void OpenFin_InteropContextGroupsReceived(object sender, InteropContextGroupsReceivedEventArgs e)
        {
            Invoke(new Action(() =>
            {
                contextGroupComboBox.Items.Clear();
                contextGroupComboBox.Items.Add("none");
                contextGroupComboBox.Items.AddRange(e.ContextGroupIds);
                contextGroupComboBox.SelectedIndex = 0;
                contextGroupComboBox.Enabled = true;
            }));
        }

        #endregion

        private void ContextGroupComboBox_SelectedIndexChanged(object sender, EventArgs e)
        {
            var contextGroupId = contextGroupComboBox.SelectedItem.ToString();
            if (contextGroupId != "none" && contextGroupId.IndexOf("N/A") > -1 == false && _openFin != null)
            {
                _openFin.ConnectToContextGroup(contextGroupId);
                Log("Connecting to context group: " + contextGroupId);
                submitContextButton.Enabled = true;
                _joinedContextGroup = true;
            }
            else if (contextGroupId == "none" && _openFin != null)
            {
                _openFin.LeaveContextGroup();
                if(_joinedContextGroup)
                {                
                    Log("Leaving current context group.");
                }

                submitContextButton.Enabled = false;
            }
        }

        private void ContextTypeDropDown_SelectedIndexChanged(object sender, EventArgs e)
        {
            RefreshUI();
        }

        private void FireIntent_Click(object sender, EventArgs e)
        {
            Log($"Firing intent for context type: {contextTypeDropDown.SelectedItem}");
            var result = _openFin.FireIntent(contextTypeDropDown.SelectedItem.ToString(), ContextItemComboBox.SelectedItem.ToString());
            Log($"Fired intent: {result} for context type: {contextTypeDropDown.SelectedItem}.");
        }

        private void RegisterIntent_Click(object sender, EventArgs e)
        {
            RegisterIntent(contextTypeDropDown.SelectedItem.ToString());
        }

        private void Log(string message)
        {
            if (this.logBox.InvokeRequired)
            {
                this.logBox.Invoke(new Action<string>(Log), new object[] { message });
                return;
            }
            this.logBox.AppendText(message + Environment.NewLine);
        }

        private async void RegisterIntent(string contextType)
        {
            Log($"Registering intent handler for context type: {contextType}");
            var result = await _openFin.RegisterIntent(contextType);
            Log(result);
        }
    }
}
