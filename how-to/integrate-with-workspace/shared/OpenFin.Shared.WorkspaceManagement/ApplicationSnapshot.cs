using System;
using System.Collections.Generic;

namespace OpenFin.Shared.WorkspaceManagement
{
    public class ApplicationSnapshot
    {
        public Guid SnapShotId { get; set; }
        public Version Version { get; set; }

        public List<ViewInfo> Views = new List<ViewInfo>();

        public MainApp App {get; set;}
    }
}
