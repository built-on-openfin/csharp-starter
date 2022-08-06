using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenFin.Shared.WorkspaceManagement
{
    public class App
    {
        /**
         * Unique identifier for an application.
         */
        public string appId;

        /**
         * A UI friendly title for the application.
         */
        public string title;
        /**
         * URL to application manifest.
         */
        public string manifest;
        /**
         * UI friendly description for an application.
         */
        public string description;
        /**
         * Describes the type of manifest resolved by the `manifest` field.
         * Launch mechanics are determined by the manifest type.
         */
        public string manifestType;
        /**
         * A list of icons that can be rendered in UI for this application.
         */
        public List<Image> icons = new List<Image>();
        /**
         * A list of optional images that highlight application functionality.
         */
        public List<Image> images = new List<Image>();

        public List<string> tags = new List<string>();
    
        public string version;
    
        public string publisher;
    
        public string contactEmail;

        public string supportEmail;
    }
}
