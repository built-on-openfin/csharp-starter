using OpenFin.Shared.WorkspaceManagement;
using OpenFin.WindowsForm.TestHarness.ChildForms;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Threading.Tasks;
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
        WorkspaceOptions workspaceOptions;
        ConnectionOptions connectionOptions;

        public WorkspaceManagement(Dispatcher dispatcher)
        {
            dispatch = dispatcher;
            formDirectory = new FormDirectory();
            NameValueCollection appSettings = ConfigurationManager.AppSettings;
            bool workspaceAutoConnect = bool.Parse(appSettings.Get("workspaceAutoConnect") ?? Settings.DefaultWorkspaceAutoConnect);
            string workspaceChannelId = appSettings.Get("workspaceChannelId") ?? Settings.DefaultWorkspaceChannelId;
            if(workspaceChannelId == null || workspaceChannelId == "")
            {
                // check commandline args
                string[] arguments = Environment.GetCommandLineArgs();
                for (var i = 0; i < arguments.Length; i++)
                {
                    if (arguments[i].StartsWith("--workspaceChannelId"))
                    {
                        string[] workspaceChannelIdArg = arguments[i].Split('=');
                        workspaceChannelId = workspaceChannelIdArg[1].Trim();
                    }
                }
                if(workspaceChannelId == null || workspaceChannelId == "")
                    workspaceChannelId = Prompt.ShowDialog("Enter WorkSpace ID:", "Openfin WorkSpace Adapter");
            }
            string workspaceManifestUrl = appSettings.Get("workspaceManifestUrl") ?? Settings.DefaultWorkspaceManifestUrl;
            string uuid = appSettings.Get("uuid") ?? Settings.DefaultUUID;
            string licenseKey = appSettings.Get("licenseKey") ?? Settings.DefaultLicenseKey;
            string commandLineSnapshotArg = appSettings.Get("commandLineSnapshotArg") ?? "";
            workspaceOptions = new WorkspaceOptions() { WorkspaceChannelId = workspaceChannelId, WorkspaceManifestUrl = workspaceManifestUrl, WorkspaceAutoConnect = workspaceAutoConnect, CommandLineSnapshotArg = commandLineSnapshotArg };
            connectionOptions = new ConnectionOptions("openfin-demo-license-key", uuid);
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

        public async Task ShowHomeAsync()
        {
            bool result = await workspace.CanExecuteAction(AvailableActions.ShowHome);
            Console.WriteLine("Can show home", result);
            workspace.ShowHome();
        }

        public async Task ShowStoreAsync()
        {
            bool result = await workspace.CanExecuteAction(AvailableActions.ShowStore);
            Console.WriteLine("Can show store", result);
            workspace.ShowStore();
        }
        public async Task ShowDockAsync()
        {
            bool result = await workspace.CanExecuteAction(AvailableActions.ShowDock);
            Console.WriteLine("Can show dock", result);
            workspace.ShowDock();
        }

        public async Task HideHomeAsync()
        {
            bool result = await workspace.CanExecuteAction(AvailableActions.HideHome);
            Console.WriteLine("Can hide home", result);
            workspace.HideHome();
        }
        public async Task HideStoreAsync()
        {
            bool result = await workspace.CanExecuteAction(AvailableActions.HideStore);
            Console.WriteLine("Can hide store", result);
            workspace.HideStore();
        }
        public async Task MinimizeDockAsync()
        {
            bool result = await workspace.CanExecuteAction(AvailableActions.MinimizeDock);
            Console.WriteLine("Can minimize dock", result);
            workspace.MinimizeDock();
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
            var snapshot = new ApplicationSnapshot { SnapShotId = guid, Version = version, Views = views };

            if (workspaceOptions.CommandLineSnapshotArg != null && workspaceOptions.CommandLineSnapshotArg.Length > 0)
            {                
                var base64Snapshot = ApplicationSnapshotConverter.ToBase64JsonEncodedString(snapshot);

                if(base64Snapshot != null)
                {
                    var hostApp = new MainApp();
                    string commandLineArgs = workspaceOptions.CommandLineSnapshotArg + "=" + base64Snapshot;
                    hostApp.manifestType = "inline-external";
                    hostApp.manifest = new ExternalProcessRequestType() { arguments = commandLineArgs, path = System.Reflection.Assembly.GetExecutingAssembly().Location };
                    hostApp.appId = connectionOptions.UUID;
                    hostApp.title = "OpenFin WindowsForm TestHarness";
                    snapshot.App = hostApp;
                }
            }

            return snapshot;
        }
    }
}
