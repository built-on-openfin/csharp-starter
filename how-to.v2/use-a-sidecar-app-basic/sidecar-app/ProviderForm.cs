using System;
using System.Diagnostics;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Forms;
using Newtonsoft.Json;
using OpenFin.Net.Adapter;
using OpenFin.Net.Adapter.Channels;
using OpenFin.Net.Adapter.Logging;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.Tab;

namespace SideCar.App
{
    public partial class ProviderForm : Form
    {

        private SynchronizationContext? UISyncCtxt;
        private Provider? provider;

        public ProviderForm()
        {
            InitializeComponent();
            UISyncCtxt = SynchronizationContext.Current;
            txtStatus.Text = string.Empty;
        }

        private void btnCreateSideCarServicel_Click(object sender, EventArgs e)
        {
            if (provider == null)
            {
                provider = new Provider();
                provider.Init(ShowStatus);
                btnCreateSideCarService.Enabled = false;
                btnBroadcastToClient.Enabled = true;
            }

        }

        private void btnBroadcastToClient_Click(object sender, EventArgs e)
        {
            if (provider != null)
            {
                provider.BroadcastMessage("Sending message to connected client: " + DateTime.Now);
            }
        }

        private void ShowStatus(string message)
        {
            if (!string.IsNullOrEmpty(message) && UISyncCtxt != null)
            {
                UISyncCtxt.Send(_ =>
               {
                   txtStatus.Text += message + Environment.NewLine;
               }, null);
            }
        }

        private void clearLogs_Click(object sender, EventArgs e)
        {
            txtStatus.Text = "";
        }
    }
}