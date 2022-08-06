using OpenFin.Shared.WorkspaceManagement;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace OpenFin.WindowsForm.TestHarness
{
    internal class View
    {
        public View(string manifest, Form instance, ViewInfo info = null)
        {

            Instance = instance;

            if (info != null)
            {
                SetInfo(info);
            }
            else
            {
                InstanceId = Guid.NewGuid();
                Manifest = manifest;
                Instance.Show();
            }
        }

        public Form Instance { get; private set; }

        public string Manifest { get; private set; }

        public Guid InstanceId { get; private set; }

        public ViewInfo GetInfo()
        {
            var info = new ViewInfo
            {
                LocationX = Instance.Location.X,
                LocationY = Instance.Location.Y,
                Width = Instance.Size.Width,
                Height = Instance.Size.Height,
                WindowState = Instance.WindowState.ToString(),
                InstanceId = InstanceId,
                Manifest = Manifest
            };
            return info;
        }

        private void SetInfo(ViewInfo info)
        {
            InstanceId = info.InstanceId;
            Manifest = info.Manifest;
            Instance.StartPosition = FormStartPosition.Manual;
            Instance.Location = new System.Drawing.Point(Convert.ToInt32(info.LocationX), Convert.ToInt32(info.LocationY));
            Instance.Size = new System.Drawing.Size(Convert.ToInt32(info.Width), Convert.ToInt32(info.Height));
            FormWindowState state;
            if (Enum.TryParse(info.WindowState, out state))
            {
                Instance.WindowState = state;
            }
            Instance.Show();

        }
    }
}
