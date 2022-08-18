namespace OpenFin.Shared.WorkspaceManagement
{
    public class WorkspaceOptions
    {
        public string WorkspaceChannelId { get; set; }

        public string WorkspaceManifestUrl { get; set; }

        public bool WorkspaceAutoConnect { get; set; }
        /// <summary>
        /// If specified then the app definition in a snapshot will include
        /// a command line arg and a token and the platform will replace the token
        /// with the snapshot if it needs to launch the app because it isn't running
        /// and connected. The shared library will then parse the snapshot and use it
        /// to launch the related views as if it had been already running and passed them
        /// by the workspace platform.
        /// </summary>
        public string CommandLineSnapshotArg { get; set; }
    }
}
