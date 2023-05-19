using System;
using System.Diagnostics;
using System.Threading;
using System.Windows;
using OpenFin.Net.Adapter;
using OpenFin.Net.Adapter.Channels;


using OpenFin.Net.Adapter.Logging;
using OpenFin.Net.Adapter.Logs.Serilog;

namespace Channels
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

            runtime = new RuntimeFactory()
                        .UseLoggingConfigOverrides(new LogConfigOverrides
                        {
                            MinLevel = LogLevel.Information
                        })
                        .UseSeriLogLogging()
                        .GetRuntimeInstance(new RuntimeOptions
                        {
                            Version = "stable",
                            UUID = "dotnet-adapter-sample-wpf-channels-" + Environment.TickCount.ToString(),
                            LicenseKey = "openfin-demo-license-key"
                        });

            status.Content = "Connecting...";

            runtime.Connected += Runtime_Connected;
            await runtime.ConnectAsync();

            channels = runtime.GetService<IChannels>();


            var loggerMgr = runtime.GetService<ILogManager>();
           
            var logger = loggerMgr.GetLogger(typeof(MainWindow));
            logger.Debug( () => "Hello World Deferred");

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

        private async void ProviderBroadcast_Click(object sender, RoutedEventArgs e)
        {
            await provider.BroadcastAsync("test", "Hello World!");
        }

        private async void ChannelClassicProviderCreate_Click(object sender, RoutedEventArgs e)
        {
            provider = channels.CreateProvider(new ChannelProviderOptions("andy"));

            provider.ClientConnected += (object? sender, ChannelConnectedEventArgs e) =>
            {
                Debug.WriteLine($"ClientConnected {e.Client.ChannelID}");
            };
            provider.ClientDisconnected += (object? sender, ChannelDisconnectedEventArgs e) =>
            {
                Debug.WriteLine($"ClientDisconnected {e.Client.ChannelID}");
            };

            try
            {
                await provider.OpenAsync();

                provider.RegisterTopic<string, int>("test", (payload, channel) =>
                {
                    Debug.WriteLine($"Register Topic Response: [{payload}]");

                    return 51;
                });

                Debug.WriteLine("Provider Opened");

            }
            catch
            {

            }
            
        }

        private async void ChannelsConnectToClassicChannel_Click(object sender, RoutedEventArgs e)
        {
            channelClient = channels.CreateClient( "andy");
            channelClient.Opened += (s, e) =>
            {
                Debug.WriteLine("Client Opened");


                channelClient.RegisterTopic<string, string>("test", (payload) =>
                {
                    Debug.WriteLine($"Got a message - {payload}");

                    return "coming back at ya";
                });
            };

            try
            {
                await channelClient.ConnectAsync();
                Debug.WriteLine("Client - After Connect");
            }
            catch
            {
                Debug.WriteLine("Client Failed");
            }
        }

        private async void ChannelsProviderSend_Click(object sender, RoutedEventArgs e)
        {
            var result = await channelClient.DispatchAsync<int>("test", "hello world!");

            Debug.WriteLine($"Result {result}");
        }
    }
}
