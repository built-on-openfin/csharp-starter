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
            txtMessages.Text = "";
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
            txtMessages.Text += "Connected" + Environment.NewLine;
        }

        private void Runtime_Disconnected(object? sender, EventArgs e)
        {
            Debug.WriteLine("Disconnected Event");
            txtMessages.Text += "Disconnected" + Environment.NewLine;
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

            txtMessages.Text += "Message Sent" + Environment.NewLine;
        }

        private async void ChannelClassicProviderCreate_Click(object sender, RoutedEventArgs e)
        {
            provider = channels.CreateProvider(new ChannelProviderOptions("testChannel"));

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

                    Dispatcher.Invoke(
                        new ThreadStart(
                            () => txtMessages.Text += $"Register Topic Response: [{payload}]" + Environment.NewLine
                            )
                        );

                    return 51;
                });

                Debug.WriteLine("Provider Opened");
                status.Content = "Provider Opened";
                txtMessages.Text += "Provider/Channel Created" + Environment.NewLine;

            }
            catch (Exception ex)
            {
                showError("Create Channel Failed", ex.Message);
                Debug.WriteLine($"Error on channel create: {ex.Message}");
            }
            
        }

        private async void ChannelsConnectToClassicChannel_Click(object sender, RoutedEventArgs e)
        {
            channelClient = channels.CreateClient( "testChannel");
            txtMessages.Text += "Client Created" + Environment.NewLine;
            channelClient.Opened += (s, e) =>
            {
                Debug.WriteLine("Client Opened");


                channelClient.RegisterTopic<string, string>("test", (payload) =>
                {
                    Debug.WriteLine($"Got a message - {payload}");

                    Dispatcher.Invoke(
                        new ThreadStart(() => txtMessages.Text += $"Got a message - {payload}" + Environment.NewLine));                    

                    return "coming back at ya";
                });
            };

            try
            {
                await channelClient.ConnectAsync();
                Debug.WriteLine("Client - After Connect");
                status.Content = "Client Connected";
                txtMessages.Text += "Client Connected" + Environment.NewLine;
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Client Failed");
                showError("Client Connect Failed", ex.Message);
            }
        }

        private async void ChannelsProviderSend_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                var result = await channelClient.DispatchAsync<int>("test", "hello world!");

                Debug.WriteLine($"Result {result}");
                txtMessages.Text += "ProviderMessage Sent" + Environment.NewLine;
            }
            catch(Exception ex)
            {
                showError("Provider Message Send Failed", ex.Message);
            }
        }

        private void showError(string errCaption, string errMsg)
        {
            string messageBoxText = errMsg;
            string caption = errCaption;
            MessageBoxButton button = MessageBoxButton.OK;
            MessageBoxImage icon = MessageBoxImage.Error;

            MessageBox.Show(messageBoxText, caption, button, icon, MessageBoxResult.OK);
        }
    }
}
