using Newtonsoft.Json.Linq;
using Openfin.Desktop;
using Openfin.Desktop.SnapshotSourceAPI;
using System;
using System.Threading.Tasks;

namespace OpenFin.WPF.SnapshotSourceClient
{
    internal class Platform
    {
        private Runtime? _runtime;
        private SnapshotSourceClient<Object>? _snapshotSourceClient;
        private Object? _snapshot;

        public void Connect(string licenseKey, string uuid, string manifestUrl)
        {
            _runtime = Runtime.GetRuntimeInstance(new RuntimeOptions()
            {
                UUID = uuid,
                Version = "stable",
                LicenseKey = licenseKey
            });
            _runtime.Error += (sender, e) =>
            {
                Console.WriteLine(e);
            };

            _runtime.Connect(async () =>
            {
                try
                {
                    var platform = await _runtime.System.LaunchManifestAsync<JObject>(manifestUrl);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error trying to launch manifest: " + manifestUrl, ex);
                }
            });
        }

        public async Task GetSnapshot(string platformUUID)
        {
            try {
                if (_runtime != null)
                {
                    _snapshotSourceClient = await _runtime.SnapshotSource.CreateSnapshotSourceClientAsync<Object>(platformUUID);
                    _snapshot = await _snapshotSourceClient.GetSnapshotAsync();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error getting snapshot", ex);
            }
        }

        public async Task ApplySnapshot()
        {
            if (_snapshotSourceClient != null && _snapshot != null)
            {
                try
                {
                    await _snapshotSourceClient.ApplySnapshotAsync(_snapshot);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error getting snapshot", ex);
                }
            }
        }
    }
}
