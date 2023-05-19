using OpenFin.Shared.WorkspaceManagement;
using System;
using System.Windows;

namespace OpenFin.WPF.TestHarness
{
    internal class View
    {
        public View(string appId, Window instance, ViewInfo? info = null)
        {

            Instance = instance;

            if (info != null)
            {
                SetInfo(info);
            }
            else
            {
                InstanceId = Guid.NewGuid();
                AppId = appId;
                Instance.Show();
            }
        }

        public Window Instance { get; private set; }

        public string AppId { get; private set; }

        public Guid InstanceId { get; private set; }

        public ViewInfo GetInfo()
        {
            var info = new ViewInfo
            {
                LocationX = Instance.Left,
                LocationY = Instance.Top,
                Width = Instance.Width,
                Height = Instance.Height,
                WindowState = Instance.WindowState.ToString(),
                InstanceId = InstanceId,
                AppId = AppId
            };
            return info;
        }

        private void SetInfo(ViewInfo info)
        {
            InstanceId = info.InstanceId;
            AppId = info.AppId;
            Instance.WindowStartupLocation = WindowStartupLocation.Manual;
            Instance.Left = info.LocationX;
            Instance.Top = info.LocationY;
            Instance.Width = info.Width;
            Instance.Height = info.Height;
            WindowState state;
            if (Enum.TryParse(info.WindowState, out state))
            {
                Instance.WindowState = state;
            }
            Instance.Show();
        }
    }
}
