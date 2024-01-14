using System;
using System.Diagnostics;
using System.Text.Json.Nodes;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using OpenFin.Net.Adapter;
using OpenFin.Net.Adapter.Interfaces;
using OpenFin.Net.Adapter.Interop;

namespace Interop
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private IRuntime runtime;
        private IInterop interop;
        private IInteropClient interopClient;

        public MainWindow()
        {
            InitializeComponent();
            txtMessages.Text = string.Empty;
            ShowMessage("Please ensure that you are running the how-to/support-context-and-intents example from the Workspace starter repo." + Environment.NewLine);
            ShowMessage("*******************************************************************************************************************************" + Environment.NewLine);
            ShowMessage("" + Environment.NewLine);
        }

        private async void connect_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                Debug.WriteLine($"UI Thread {Thread.CurrentThread.ManagedThreadId}");
                ShowMessage($"UI Thread {Thread.CurrentThread.ManagedThreadId}" + Environment.NewLine);

                var factory = new RuntimeFactory();

                runtime = factory.GetRuntimeInstance(new RuntimeOptions
                {
                    Version = "stable",
                    UUID = "dotnet-adapter-sample-wpf-channels",
                    LicenseKey = "openfin-demo-license-key"
                });

                status.Content = "Connecting...";
                ShowMessage("Connecting ..." + Environment.NewLine);

                runtime.Connected += Runtime_Connected;
                await runtime.ConnectAsync();

                interop = runtime.GetService<IInterop>();

                runtime.Disconnected += Runtime_Disconnected;

                status.Content = "Connected";
                ShowMessage("Connected to OpenFin Runtime" + Environment.NewLine);
                ConnectToBroker.IsEnabled= true;
            }
            catch (Exception ex)
            {
                ConnectToBroker.IsEnabled = false;
                ShowMessage("Unable to connect to OpenFin Runtime" + Environment.NewLine + ex.Message);
            }
            
        }

        private void Runtime_Disconnected(object? sender, EventArgs e)
        {
            Debug.WriteLine("Disconnected Event");
            ShowMessage("Disconnected Event" + Environment.NewLine);
        }

        private void Runtime_Connected(object? sender, EventArgs e)
        {
            Debug.WriteLine("Connected Event");
            ShowMessage("Connected Event" + Environment.NewLine);
        }

        private async void disconnect_Click(object sender, RoutedEventArgs e)
        {
            status.Content = "Disconnecting...";
            ShowMessage("Disconnecting ..." + Environment.NewLine);

            await runtime.DisconnectAsync();

            FireIntent.IsEnabled = false;
            ConnectToBroker.IsEnabled = false;

            status.Content = "Disconnected";
            ShowMessage("Disconnected" + Environment.NewLine);
        }

        private async void ConnectToBroker_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                interopClient = await interop.ConnectAsync("support-context-and-intents").ConfigureAwait(true);

                var contextGroups = await interopClient.GetContextGroupsAsync();

                await interopClient.AddContextHandlerAsync(ctx =>
                {
                    Debug.WriteLine($"Interop Context Received! {ctx.Name}");

                    Dispatcher.Invoke(
                        new ThreadStart(
                            () => txtMessages.Text += $"Interop Context Received! {ctx.Name}" + Environment.NewLine
                            )
                        );
                });


                await interopClient.JoinContextGroupAsync("green");
                ShowMessage("Connected to Broker: support-context-and-intents on channel green" + Environment.NewLine);
                FireIntent.IsEnabled = true;
            }
            catch (Exception ex)
            {
                FireIntent.IsEnabled = false;
                ShowMessage("Error connecting to Broker: support-context-and-intents on channel green" + Environment.NewLine + ex.Message + Environment.NewLine +
                    "Please verify that you are running the how-to/support-context-and-intents example from the Workspace starter repo." + Environment.NewLine);
            }

        }

        private async void FireIntent_Click(object sender, RoutedEventArgs e)
        {
            // Build out intent payload by deserializing a standard FDC3 payload
            var intent = new Intent
            {
                Name = "StartCall",
                Context = new Context
                {
                    Type = "fdc3.contact",
                    Id = new JsonObject
                    {
                        { "email", "john.mchugh@gmail.com" }
                    }
                }
            };

            try
            {
                var result = await interopClient.FireIntentAsync(intent);
                ShowMessage("Intent was successfully fired." + Environment.NewLine);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Resolver Timeout - User has likely dismissed the target selection dialog");
                ShowMessage("Error firing intent" + Environment.NewLine + "Resolver Timeout - User has likely dismissed the target selection dialog" + Environment.NewLine + ex.Message);
            }
        }

        private void ShowMessage(string message)
        {
            txtMessages.Text += message;
        }
    }
}
