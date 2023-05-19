using System;

namespace OpenFin.Shared.WorkspaceManagement
{
    public static class CommandLineOptions
    {
        public static string GetSpecifiedWorkspaceUUID()
        {
            string workspaceUUID = null;

            string[] arguments = Environment.GetCommandLineArgs();
            for (var i = 0; i < arguments.Length; i++)
            {
                if (arguments[i].StartsWith("workspaceUUID="))
                {
                    string[] workspaceUUIDArg = arguments[i].Split('=');
                    workspaceUUID = workspaceUUIDArg[1];
                }
            }
            return workspaceUUID;
        }
    }
}
