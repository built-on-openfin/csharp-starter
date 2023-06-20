
using System;
using System.Text.Json.Nodes;
using System.Threading.Tasks;
using OpenFin.Net.Adapter;
using OpenFin.Net.Adapter.Extensions.DesktopSystem;
using OpenFin.Net.Adapter.Extensions.Snapshots;
using OpenFin.Net.Adapter.Logs.Serilog;

namespace OpenFin.WPF.SnapshotSourceClient
{
    internal class Platform
    {
        private IRuntime? _runtime;
        private SnapshotSourceClient<JsonObject>? _snapshotSourceClient;
        private JsonObject? _snapshot;

        public async void Connect(string licenseKey, string uuid, string manifestUrl)
        {
            _runtime = new RuntimeFactory()
                        .UseSeriLogLogging()
                        .UseSnapshotSource()
                        .UseDesktopSystem()
                        .GetRuntimeInstance(new RuntimeOptions
                        {
                            UUID = uuid,
                            Version = "stable",
                            LicenseKey = licenseKey
                        });

            await _runtime.ConnectAsync();

            var desktop = _runtime.GetService<IDesktopSystem>();

            try
            {
                var platform = await desktop.LaunchManifestAsync(new Uri(manifestUrl));
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error trying to launch manifest: " + manifestUrl, ex);
            }
        }

        public async Task GetSnapshot(string platformUUID)
        {

            try
            {
                if (_runtime != null)
                {
                    var snapshotSourceService = _runtime.GetService<ISnapshotSource>();

                    _snapshotSourceClient = await snapshotSourceService.CreateSnapshotSourceClientAsync<JsonObject>(platformUUID);
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
                    await _snapshotSourceClient.ApplySnapshotAsync( _snapshot);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error applying snapshot", ex);
                }
            }
        }
    }
}
