using OpenFin.Shared.WorkspaceManagement;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Windows;

namespace OpenFin.WPF.TestHarness.ChildForms
{
    public class OpenFinApp : OpenFin.Shared.WorkspaceManagement.App
    {
        private Func<Window> _getAppInstance;
        public OpenFinApp(string uuid, string title, string id, string publisher, Func<Window> getInstance, string? tag1 = null, string? tag2 = null, string? description = null)
        {
            this.publisher = publisher;
            appId = id;
            this.title = title;
            if (description != null)
            {
                this.description = description;
            }
            else
            {
                this.description = title;
            }
            _getAppInstance = getInstance;
            manifestType = "connection";
            manifest = uuid;
            tags = new List<string>();
            if (tag1 != null)
            {
                tags.Add(tag1);
            }
            if (tag2 != null)
            {
                tags.Add(tag2);
            }
            supportEmail = "support@openfin.co";
            contactEmail = "support@openfin.co";
            icons.Add(new Image { src = "https://www.openfin.co/favicon.ico" });
        }

        public Window GetAppInstance()
        {
            return _getAppInstance();
        }
    }
}
