using System;
using System.Collections.Generic;
using System.Windows.Forms;
using Openfin.Desktop;
using Openfin.WinForm;

namespace OpenFin.Automation.Win.Sample
{
    public partial class MainWindow : Form
    {
        public MainWindow()
        {
            InitializeComponent();

            setWebView();
        }


        private void setWebView()
        {
            var appOptions = new Openfin.Desktop.ApplicationOptions("test-sample", "test-sample-uuid", $"{Environment.CurrentDirectory}\\content\\index.html");

            var dotNetOptions = new RuntimeOptions()
            {
                UUID = "test-winform-xxx",
                Version = "26.102.71.7",
                EnableRemoteDevTools = true,
                RemoteDevToolsPort = 9090
            };


            this.embeddedView.Initialize(dotNetOptions, appOptions);
        }

        private void embeddedView_Ready(object sender, EventArgs e)
        {
            this.label1.Visible = false;
        }
    }
}
