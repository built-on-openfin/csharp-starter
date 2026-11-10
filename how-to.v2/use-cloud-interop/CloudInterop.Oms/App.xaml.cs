using System.Windows;

namespace CloudInteropOms
{
    public partial class App : Application
    {
        private void OnStartup(object sender, StartupEventArgs e)
        {
            var settings = AppSettings.Load(e.Args);
            new MainWindow(settings).Show();
        }
    }
}
