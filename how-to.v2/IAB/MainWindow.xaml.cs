using System;
using System.Diagnostics;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Threading;
using System.Threading.Channels;
using System.Windows;
using OpenFin.Net.Adapter;
using OpenFin.Net.Adapter.Channels;
using OpenFin.Net.Adapter.InterApplicationBus;

namespace IAB
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private IRuntime runtime;
        private IChannelProvider provider;
        private IChannels channels;
        private IChannelClient channelClient;

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
                UUID = "dotnet-adapter-sample-wpf-simpleconnect",
                LicenseKey = "openfin-demo-license-key",
                Arguments = "--v=1"
            });

            status.Content = "Connecting...";

            runtime.Connected += Runtime_Connected;
            await runtime.ConnectAsync();

            channels = runtime.GetService<IChannels>();
            
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

        private void IABSubscribe_Click(object sender, RoutedEventArgs e)
        {
            var iab = runtime.GetService<IInterApplicationBus>();

            iab.Subscribe("my-topic", IABHandler);

            iab.AddSubscribeListener(SubscriberListener);
        }

        private void SubscriberListener(string uuid, string topic)
        {
        }

        private void IABPublish_Click(object sender, RoutedEventArgs e)
        {
            var iab = runtime.GetService<IInterApplicationBus>();

            iab.Publish("my-topic", new
            {
                name = "andy"
            });
        }

        private void IABUnsubscribe_Click(object sender, RoutedEventArgs e)
        {

        }

        private void IABHandler(string sourceUuid, string topic, JsonElement message)
        {
            Debug.WriteLine(message);
            // TODO: Message is coming through as a JsonObject - See if that can be improved or make the type stronger
            JsonElement result;
            if(message.TryGetProperty("name", out result))
            {
                Debug.WriteLine($"{result.ToString()}");
            }            
        }


    }
}
