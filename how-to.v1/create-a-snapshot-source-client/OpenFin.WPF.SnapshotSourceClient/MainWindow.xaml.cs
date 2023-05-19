using System.Windows;

namespace OpenFin.WPF.SnapshotSourceClient
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private Platform _platform;

        public MainWindow()
        {
            InitializeComponent();

            _platform = new Platform();
        }

        private void PlatformLaunch_Click(object sender, RoutedEventArgs e)
        {
            _platform.Connect(Settings.LicenseKey, Settings.UUID, Settings.ManifestUrl);
        }

        private void GetSnapshot_Click(object sender, RoutedEventArgs e)
        {
            _ = _platform.GetSnapshot(Settings.PlatformUUID);
        }
        private void ApplySnapshot_Click(object sender, RoutedEventArgs e)
        {
            _ = _platform.ApplySnapshot();
        }
    }
}
