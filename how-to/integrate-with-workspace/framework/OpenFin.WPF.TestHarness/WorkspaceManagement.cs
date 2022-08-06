using OpenFin.Shared.WorkspaceManagement;
using OpenFin.WPF.TestHarness.ChildForms;
using System;
using System.Collections.Generic;
using System.Windows.Threading;

namespace OpenFin.WPF.TestHarness
{
    internal class WorkspaceManagement: ISnapShotProvider<ApplicationSnapshot>
    {
        List<View> activeViews = new List<View>();
        Workspace workspace;
        Dispatcher dispatch;
        WindowDirectory windowDirectory;

        public WorkspaceManagement(Dispatcher dispatcher)
        {
            dispatch = dispatcher;
            windowDirectory = new WindowDirectory();
            WorkspaceOptions workspaceOptions = new WorkspaceOptions() { WorkspaceChannelId = "workspace-connection", WorkspaceManifestUrl = "http://localhost:8080/manifest.fin.json"};
            ConnectionOptions connectionOptions = new ConnectionOptions("openfin-demo-license-key", Settings.UUID);
            workspace = new Workspace(GetApps, LaunchApp, this, connectionOptions, workspaceOptions);
        }

        private List<Shared.WorkspaceManagement.App> GetApps()
        {
            var appList = windowDirectory.GetAllWindows();
            return appList.ConvertAll(x => (Shared.WorkspaceManagement.App)x);
        }

        private bool LaunchApp(Shared.WorkspaceManagement.App app)
        {
            dispatch.Invoke(new Action(() =>
            {
                LaunchView(app.appId);
            }), null);
            return true;
        }
        private void RegisterView(View view)
        {
            view.Instance.Closed += Window_Closed;
            activeViews.Add(view);
        }

        private void Window_Closed(object? sender, EventArgs e)
        {
            if (sender != null)
            {
                var view = sender as View;
                if(view != null)
                {
                    activeViews.Remove(view);
                }
            }

        }

        public void LaunchView(string id, ViewInfo? info = null)
        {
            var window = windowDirectory.GetWindowInstance(id);

            if (window != null)
            {
                var view = new View(id, window, info);
                RegisterView(view);
            }
        }

        public void ShowHome()
        {
            System.Threading.Tasks.Task<bool> result = workspace.CanExecuteAction(AvailableActions.ShowHome);
            Console.WriteLine("Can show home", result);
            workspace.ShowHome();
        }

        public void ShowStore()
        {
            System.Threading.Tasks.Task<bool> result = workspace.CanExecuteAction(AvailableActions.ShowStore);
            Console.WriteLine("Can show store", result);
            workspace.ShowStore();
        }

        public void HideHome()
        {
            System.Threading.Tasks.Task<bool> result = workspace.CanExecuteAction(AvailableActions.HideHome);
            Console.WriteLine("Can hide home", result);
            workspace.HideHome();
        }
        public void HideStore()
        {
            System.Threading.Tasks.Task<bool> result = workspace.CanExecuteAction(AvailableActions.HideStore);
            Console.WriteLine("Can hide store", result);
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
                List<View>? viewsToClose = new List<View>(activeViews);
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
            dispatch.Invoke(new Action(() =>
            {
                activeViews.ForEach(view => {
                    views.Add(view.GetInfo());
                });
            }), null);

            return new ApplicationSnapshot { SnapShotId = guid, Version = version, Views = views };
        }
    }
}

