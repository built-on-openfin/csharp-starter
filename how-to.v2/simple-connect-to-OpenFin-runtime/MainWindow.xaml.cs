using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using OpenFin.Net.Adapter;

namespace SimpleConnect
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private IRuntime runtime;
        
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
                LicenseKey = "openfin-demo-license-key"
            });

            status.Content = "Connecting...";

            runtime.Connected += Runtime_Connected;
            await runtime.ConnectAsync();

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
    }
}
