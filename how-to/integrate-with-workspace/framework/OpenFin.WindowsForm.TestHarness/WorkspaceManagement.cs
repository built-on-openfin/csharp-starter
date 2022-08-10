using OpenFin.Shared.WorkspaceManagement;
using OpenFin.WindowsForm.TestHarness.ChildForms;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Windows.Forms;
using System.Windows.Threading;

namespace OpenFin.WindowsForm.TestHarness
{
    internal class WorkspaceManagement : ISnapShotProvider<ApplicationSnapshot>
    {
        List<View> activeViews = new List<View>();
        Workspace workspace;
        Dispatcher dispatch;
        FormDirectory formDirectory;

        public WorkspaceManagement(Dispatcher dispatcher)
        {
            dispatch = dispatcher;
            formDirectory = new FormDirectory();
            NameValueCollection appSettings = ConfigurationManager.AppSettings;
            bool workspaceAutoConnect = bool.Parse(appSettings.Get("workspaceAutoConnect") ?? Settings.DefaultWorkspaceAutoConnect);
            string workspaceChannelId = appSettings.Get("workspaceChannelId") ?? Settings.DefaultWorkspaceChannelId;
            string workspaceManifestUrl = appSettings.Get("workspaceManifestUrl") ?? Settings.DefaultWorkspaceManifestUrl;
            string uuid = appSettings.Get("uuid") ?? Settings.DefaultUUID;
            string licenseKey = appSettings.Get("licenseKey") ?? Settings.DefaultLicenseKey;

            WorkspaceOptions workspaceOptions = new WorkspaceOptions() { WorkspaceChannelId = workspaceChannelId, WorkspaceManifestUrl = workspaceManifestUrl, WorkspaceAutoConnect = workspaceAutoConnect };
            ConnectionOptions connectionOptions = new ConnectionOptions("openfin-demo-license-key", uuid);
            workspace = new Workspace(GetApps, LaunchApp, this, connectionOptions, workspaceOptions);
        }

        private List<App> GetApps()
        {
            var appList = formDirectory.GetAllForms();
            return appList.ConvertAll(x => (App)x);
        }

        private bool LaunchApp(App app)
        {
            dispatch.Invoke(new Action(() =>
            {
                LaunchView(app.appId);
            }), null);
            return true;
        }
        private void RegisterView(View view)
        {
            view.Instance.FormClosed += new FormClosedEventHandler(Form_Closed);
            activeViews.Add(view);
        }

        private void Form_Closed(object sender, FormClosedEventArgs e)
        {
            activeViews.Remove(sender as View);
        }
        public void LaunchView(string id, ViewInfo info = null)
        {
            var form = formDirectory.GetFormInstance(id);

            if (form != null)
            {
                var view = new View(id, form, info);
                RegisterView(view);
            }
        }

        public void ShowHome()
        {
            workspace.ShowHome();
        }

        public void ShowStore()
        {
            workspace.ShowStore();
        }

        public void HideHome()
        {
            workspace.HideHome();
        }
        public void HideStore()
        {
            workspace.HideStore();
        }

        public void Disconnect()
        {
            workspace.Disconnect();
        }

        public void ApplySnapshot(ApplicationSnapshot snapshot)
        {
            // choices to be made
            // minimise active forms, close active forms, hide activeforms. App owner needs to decide what fits them best.

            // for demo we will close active forms
            dispatch.Invoke(new Action(() =>
            {
                List<View> viewsToClose = new List<View>(activeViews);
                viewsToClose.ForEach(view => {  
                    view.Instance.Close();
                });
                viewsToClose.Clear();
                viewsToClose = null;
                activeViews.Clear();
                snapshot.Views.ForEach(viewInfo =>
                {
                    LaunchView(viewInfo.AppId, viewInfo);
                });
            }), null);
        }

        public ApplicationSnapshot GetSnapshot()
        {
            Guid guid = Guid.NewGuid();
            Version version = System.Reflection.Assembly.GetEntryAssembly().GetName().Version;
            List<ViewInfo> views = new List<ViewInfo>();

            activeViews.ForEach(view => views.Add(view.GetInfo()));
            return new ApplicationSnapshot { SnapShotId = guid, Version = version, Views = views };
        }
    }
}
