using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenFin.Shared.WorkspaceManagement
{
    public class ExternalProcessRequestType
    {
        public string path;

        public string arguments;

        public string cwd;

        public string initialWindowState = "normal";

        public string alias;

        public string lifetime;

        public ExternalProcessRequestCertificate certificate;
    }
}
