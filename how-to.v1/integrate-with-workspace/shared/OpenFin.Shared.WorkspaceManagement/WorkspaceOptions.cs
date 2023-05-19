namespace OpenFin.Shared.WorkspaceManagement
{
    public class WorkspaceOptions
    {
        /// <summary>
        /// The UUID defined in the manifest of the workspace platform that supports connections.
        /// </summary>
        public string WorkspaceUUID { get; set; }
        /// <summary>
        /// The Channel Id the workspace has uses to accept connections. It is made up of the WorkspaceUUID and the WorkspaceConnectionId defined by the target workspace.
        /// </summary>
        public string WorkspaceChannelId { get { return WorkspaceUUID?.Trim().ToLower() + "-" + WorkspaceConnectionId?.Trim().ToLower(); } }

        /// <summary>
        /// The connection Id that the workspace you are connecting to has defined (this will form part of the channel api channel id).
        /// </summary>
        public string WorkspaceConnectionId { get; set; }

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
