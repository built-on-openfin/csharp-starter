using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace OpenFin.Shared.WorkspaceManagement
{
    public interface ISnapShotProvider<T> : Openfin.Desktop.SnapshotSourceAPI.ISnapshotSourceProvider<T>
    {
    }
}
