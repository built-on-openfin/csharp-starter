using System;
using System.Diagnostics;
using System.Text.Json;
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
            txtMessages.Text= string.Empty;
        }


        private async void connect_Click(object sender, RoutedEventArgs e)
        {
            Debug.WriteLine($"UI Thread {Thread.CurrentThread.ManagedThreadId}");
            txtMessages.Text += $"UI Thread {Thread.CurrentThread.ManagedThreadId}" + Environment.NewLine;

            var factory = new RuntimeFactory();
            runtime = factory.GetRuntimeInstance(new RuntimeOptions
            {
                Version = "stable",
                UUID = "dotnet-adapter-sample-wpf-simpleconnect",
                LicenseKey = "openfin-demo-license-key",
                Arguments = "--v=1"
            });

            status.Content = "Connecting...";
            txtMessages.Text += "Connecting ..." + Environment.NewLine;

            runtime.Connected += Runtime_Connected;
            await runtime.ConnectAsync();

            // channels = runtime.GetService<IChannels>();
            
            runtime.Disconnected += Runtime_Disconnected;

            status.Content = "Connected";
            txtMessages.Text += "Connected to OpenFin Runtime" + Environment.NewLine;
        }

        private void Runtime_Disconnected(object? sender, EventArgs e)
        {
            Debug.WriteLine("Disconnected Event");
            txtMessages.Text += "Disconnected Event" + Environment.NewLine;
        }

        private void Runtime_Connected(object? sender, EventArgs e)
        {
            Debug.WriteLine("Connected Event");
            txtMessages.Text += "Connected Event" + Environment.NewLine;
        }

        private async void disconnect_Click(object sender, RoutedEventArgs e)
        {
            status.Content = "Disconnecting...";
            txtMessages.Text += "Disconnecting ..." + Environment.NewLine;

            await runtime.DisconnectAsync();

            status.Content = "Disconnected";
            txtMessages.Text += "Disconnected" + Environment.NewLine;
        }

        private void IABSubscribe_Click(object sender, RoutedEventArgs e)
        {
            var iab = runtime.GetService<IInterApplicationBus>();

            iab.Subscribe("my-topic", IABHandler);

            iab.AddSubscribeListener(SubscriberListener);

            txtMessages.Text += "Subscribed to topic. Waiting for message to be published." + Environment.NewLine;
        }

        private void SubscriberListener(string uuid, string topic)
        {
        }

        private void IABPublish_Click(object sender, RoutedEventArgs e)
        {
            var iab = runtime.GetService<IInterApplicationBus>();

            iab.Publish("my-topic", new
            {
                name = "John Doe"
            });
            txtMessages.Text += "Message Published" + Environment.NewLine;
        }

        private void IABUnsubscribe_Click(object sender, RoutedEventArgs e)
        {
            var iab = runtime.GetService<IInterApplicationBus>();
            iab.Unsubscribe("my-topic", IABHandler);
            txtMessages.Text += "Unsubscribed from topic. Will not listen for any messages." + Environment.NewLine;
        }

        private void IABHandler(string sourceUuid, string topic, JsonElement message)
        {
            Debug.WriteLine(message);

            Dispatcher.Invoke(
                new ThreadStart(
                    () => txtMessages.Text += "Message received: " + message + Environment.NewLine
                    )
                );
        }


    }
}
