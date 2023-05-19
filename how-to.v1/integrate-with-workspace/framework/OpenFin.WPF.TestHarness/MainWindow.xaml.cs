using Openfin.Desktop;
using OpenFin.Shared.WorkspaceManagement;
using System;
using System.Collections.Specialized;
using System.Configuration;
using System.Reflection;
using System.Windows;

namespace OpenFin.WPF.TestHarness
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : System.Windows.Window
    {
        WorkspaceManagement workspaceManagement;
        public MainWindow()
        {
            InitializeComponent();
            NameValueCollection appSettings = ConfigurationManager.AppSettings;
            string workspaceUUID = appSettings.Get("workspaceUUID") ?? Settings.DefaultWorkspaceUUID;
            string specifiedWorkspaceUUID = CommandLineOptions.GetSpecifiedWorkspaceUUID();

            if(specifiedWorkspaceUUID != null)
            {
                workspaceUUID = specifiedWorkspaceUUID;
            }
            
            if(workspaceUUID == null || workspaceUUID.Trim().Length == 0 )
            {
                // prompt the user for a Workspace UUID as it is a required element for this 
                // example
                PopWindow pw = new();
                // add listener for btnOk click 
                pw.btnOk.Click += (sender, e) =>
                {
                    // get text from textbox
                    workspaceUUID = pw.PlatformTxt.Text;
                    if (workspaceUUID?.Trim() != "")
                    {
                        // close pop window
                        pw.DialogResult = true;
                    }
                };
                // show pop window
                pw.ShowDialog();
            }

            workspaceManagement = new WorkspaceManagement(System.Windows.Threading.Dispatcher.CurrentDispatcher, workspaceUUID);
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
        private void MenuItem_LaunchApp2(object sender, RoutedEventArgs e)
        {
            workspaceManagement.LaunchView("wpfapp2");
        }
        private void MenuItem_LaunchApp3(object sender, RoutedEventArgs e)
        {
            workspaceManagement.LaunchView("wpfapp3");
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
        private void MenuItem_ShowDock(object sender, RoutedEventArgs e)
        {
            workspaceManagement.ShowDock();
        }
        private void MenuItem_MinimizeDock(object sender, RoutedEventArgs e)
        {
            workspaceManagement.MinimizeDock();
        }
    }
}
