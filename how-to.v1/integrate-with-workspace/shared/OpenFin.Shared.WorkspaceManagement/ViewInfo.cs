using System;

namespace OpenFin.Shared.WorkspaceManagement
{
    public class ViewInfo
    {
        public string AppId;

        public Guid InstanceId;
        public double LocationX { get; set; }
        public double LocationY { get; set; }

        public double Width { get; set; }

        public double Height { get; set; }

        public string WindowState { get; set; }
    }
}
