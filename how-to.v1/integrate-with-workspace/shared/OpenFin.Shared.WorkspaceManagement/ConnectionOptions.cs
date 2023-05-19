using Openfin.Desktop;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenFin.Shared.WorkspaceManagement
{
    public class ConnectionOptions
    {
        public ConnectionOptions(string licenseKey, string uuid = null)
        {
            string dotNetUuid;

            if (uuid != null)
            {
                dotNetUuid = uuid;
            }
            else
            {
                dotNetUuid = Process.GetCurrentProcess().ProcessName.ToLower();
            }

            var runtimeOptions = new RuntimeOptions()
            {
                UUID = dotNetUuid,
                Version = "stable",
                LicenseKey = licenseKey
            };
            this.UUID = dotNetUuid;
            this.ConnectToRuntime(runtimeOptions);
        }
        public ConnectionOptions(RuntimeOptions runtimeOptions)
        {
            this.ConnectToRuntime(runtimeOptions);
        }

        public ConnectionOptions(Runtime runtime)
        {
            this.ConnectedRuntime = runtime;
        }

        public string UUID { get; private set; }
        public Runtime ConnectedRuntime { get; set; }

        public event EventHandler RuntimeConnected;
        
        public event EventHandler RuntimeDisconnected;

        private void Runtime_Disconnected(object sender, EventArgs e)
        {
            RuntimeDisconnected?.Invoke(this, EventArgs.Empty);
        }
        private void Runtime_Connected(object sender, EventArgs e)
        {
            RuntimeConnected?.Invoke(this, EventArgs.Empty);
        }

        private void ConnectToRuntime(RuntimeOptions runtimeOptions)
        {
            this.ConnectedRuntime = Runtime.GetRuntimeInstance(runtimeOptions);
            this.ConnectedRuntime.Connected += Runtime_Connected;
            this.ConnectedRuntime.Disconnected += Runtime_Disconnected;
        }
    }
}
