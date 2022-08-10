using System.Configuration;
using System.Collections.Specialized;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace OpenFin.WPF.TestHarness.ChildForms
{
    internal class WindowDirectory
    {
        List<OpenFinApp> apps = new List<OpenFinApp>();
        string uuid;

        public WindowDirectory()
        {
            NameValueCollection appSettings = ConfigurationManager.AppSettings;
            uuid = appSettings.Get("uuid") ?? Settings.DefaultUUID;

            GenerateApps();
        }

        public List<OpenFinApp> GetAllWindows()
        {
            return apps.ToList();
        }

        public Window? GetWindowInstance(string id)
        {
            var app = apps.Find(x => x.appId == id);

            if (app == null)
            {
                return null;
            }

            return app.GetAppInstance();
        }

        private void GenerateApps()
        {
            apps.Add(new OpenFinApp(uuid, "WPF App 1", "wpfapp1", "OpenFin .NET 6 WPF Test Harness", () => new App1(), "wpf", "native"));
            apps.Add(new OpenFinApp(uuid, "WPF App 2", "wpfapp2", "OpenFin .NET 6 WPF Test Harness", () => new App2(), "wpf", "native"));
            apps.Add(new OpenFinApp(uuid, "WPF App 3", "wpfapp3", "OpenFin .NET 6 WPF Test Harness", () => new App3(), "wpf", "native"));
        }
    }
}
