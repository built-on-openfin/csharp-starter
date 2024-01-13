using System;

namespace OpenFin.Interop.Win.Sample
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
                    if(workspaceUUID.Trim().Length == 0 || workspaceUUID.StartsWith("{OF-"))
                    {
                        // empty string or token has been passed and is not a suitable UUID
                        return null;
                    }
                    break;
                }
            }
            return workspaceUUID;
        }

        public static string GetSpecifiedNativeUUID()
        {
            string nativeUUID = null;

            string[] arguments = Environment.GetCommandLineArgs();
            for (var i = 0; i < arguments.Length; i++)
            {
                if (arguments[i].StartsWith("nativeUUID="))
                {
                    string[] nativeUUIDArg = arguments[i].Split('=');
                    nativeUUID = nativeUUIDArg[1];
                    if (nativeUUID.Trim().Length == 0 || nativeUUID.StartsWith("{OF-"))
                    {
                        // empty string or token has been passed and is not a suitable UUID
                        return null;
                    }
                    break;
                }
            }
            return nativeUUID;
        }
        public static bool GetRegisterIntents()
        {
            string[] arguments = Environment.GetCommandLineArgs();
            for (var i = 0; i < arguments.Length; i++)
            {
                if (arguments[i] == "registerIntents")
                {
                    return true;
                }
            }
            return false;
        }
    }
}
