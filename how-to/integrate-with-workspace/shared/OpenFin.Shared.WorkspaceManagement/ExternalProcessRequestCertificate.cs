using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenFin.Shared.WorkspaceManagement
{
    public class ExternalProcessRequestCertificate
    {
        public string serial;

        public string subject;
       
        public string publickey;

        public string thumbprint;

        public bool trusted;
    }
}
