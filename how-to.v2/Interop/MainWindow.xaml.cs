using System;
using System.Diagnostics;
using System.Text.Json.Nodes;
using System.Threading;
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
        }

        private async void connect_Click(object sender, RoutedEventArgs e)
        {
            Debug.WriteLine($"UI Thread {Thread.CurrentThread.ManagedThreadId}");

            var factory = new RuntimeFactory();

            runtime = factory.GetRuntimeInstance(new RuntimeOptions
            {
                Version = "stable",
                UUID = "dotnet-adapter-sample-wpf-channels",
                LicenseKey = "openfin-demo-license-key"
            });

            status.Content = "Connecting...";

            runtime.Connected += Runtime_Connected;
            await runtime.ConnectAsync();

            interop = runtime.GetService<IInterop>();

            runtime.Disconnected += Runtime_Disconnected;

            status.Content = "Connected";
        }

        private void Runtime_Disconnected(object? sender, EventArgs e)
        {
            Debug.WriteLine("Disconnected Event");
        }

        private void Runtime_Connected(object? sender, EventArgs e)
        {
            Debug.WriteLine("Connected Event");
        }

        private async void disconnect_Click(object sender, RoutedEventArgs e)
        {
            status.Content = "Disconnecting...";

            await runtime.DisconnectAsync();

            status.Content = "Disconnected";
        }

        private async void ConnectToBroker_Click(object sender, RoutedEventArgs e)
        {
            interopClient = await interop.ConnectAsync("support-context-and-intents").ConfigureAwait(true);

            var contextGroups = await interopClient.GetContextGroupsAsync();

            await interopClient.AddContextHandlerAsync(ctx => {
                Debug.WriteLine($"Interop Context Received! {ctx.Name}");
            });

            await interopClient.JoinContextGroupAsync("green");
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
            }
            catch
            {
                Console.WriteLine("Resolver Timeout - User has likely dismissed the target selection dialog");
            }
        }
    }
}
