using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Windows;
using OpenFin.Net.Adapter;

namespace TestApp;
/// <summary>
/// Interaction logic for App.xaml
/// </summary>
public partial class App : Application
{
    private IRuntime runtime;
    
    protected async override void OnStartup(StartupEventArgs e)
    {
        var factory = new RuntimeFactory();

        runtime = factory.GetRuntimeInstance(new RuntimeOptions
        {
            Version = "stable",
            UUID = "dotnet-adapter-sample-wpf-channels",
            LicenseKey = "openfin-demo-license-key"
        });

        await runtime.ConnectAsync();

        this.MainWindow = new MainWindow();
        this.MainWindow.DataContext = new MainWindowVM(runtime);    
        
        this.MainWindow.Show();
    }
}
