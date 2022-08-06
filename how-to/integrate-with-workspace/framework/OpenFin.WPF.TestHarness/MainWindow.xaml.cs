using System;
using System.Reflection;
using System.Windows;

namespace OpenFin.WPF.TestHarness
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        WorkspaceManagement workspaceManagement;
        public MainWindow()
        {
            InitializeComponent();

            workspaceManagement = new WorkspaceManagement(System.Windows.Threading.Dispatcher.CurrentDispatcher);
            var menuDropAlignmentField = typeof(SystemParameters).GetField("_menuDropAlignment", BindingFlags.NonPublic | BindingFlags.Static);
            Action setAlignmentValue = () => {
                if (SystemParameters.MenuDropAlignment && menuDropAlignmentField != null) menuDropAlignmentField.SetValue(null, false);
            };
            setAlignmentValue();
            SystemParameters.StaticPropertyChanged += (sender, e) => { setAlignmentValue(); };
            this.Closing += MainWindow_Closing;
        }

        private void MainWindow_Closing(object? sender, System.ComponentModel.CancelEventArgs e)
        {
            workspaceManagement.Disconnect();
        }

        private void MenuItem_LaunchApp1(object sender, RoutedEventArgs e)
        {
            workspaceManagement.LaunchView("wpfapp1");
        }

        private void MenuItem_ShowHome(object sender, RoutedEventArgs e)
        {
            workspaceManagement.ShowHome();
        }

        private void MenuItem_HideHome(object sender, RoutedEventArgs e)
        {
            workspaceManagement.HideHome();
        }

        private void MenuItem_ShowStore(object sender, RoutedEventArgs e)
        {
            workspaceManagement.ShowStore();
        }

        private void MenuItem_HideStore(object sender, RoutedEventArgs e)
        {
            workspaceManagement.HideStore();
        }
    }
}
