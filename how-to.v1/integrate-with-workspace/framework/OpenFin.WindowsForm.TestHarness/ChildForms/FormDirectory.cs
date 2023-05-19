using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Linq;
using System.Windows.Forms;

namespace OpenFin.WindowsForm.TestHarness.ChildForms
{
    public class FormDirectory
    {
        List<OpenFinApp> apps = new List<OpenFinApp>();
        string uuid;
        public FormDirectory()
        {
            NameValueCollection appSettings = ConfigurationManager.AppSettings;
            uuid = appSettings.Get("uuid") ?? Settings.DefaultUUID;

            GenerateApps();
        }

        public List<OpenFinApp> GetAllForms()
        {
            return apps.ToList();
        }

        public Form GetFormInstance(string id)
        {
            var app = apps.Find(x => x.appId == id);
            
            if(app == null)
            {
                return null;
            }

            return app.GetAppInstance();
        }

        private void GenerateApps()
        {
            apps.Add(new OpenFinApp(uuid, "WinForm App1", "winformapp1", "OpenFin .NET 4 WinForm Test Harness", () => new App1(), "winform", "native"));
            apps.Add(new OpenFinApp(uuid, "WinForm App2", "winformapp2", "OpenFin .NET 4 WinForm Test Harness", () => new App2(), "winform", "native"));
            apps.Add(new OpenFinApp(uuid, "WinForm App3", "winformapp3", "OpenFin .NET 4 WinForm Test Harness", ()=> new App3(), "winform", "native"));      
        }
    }
}
