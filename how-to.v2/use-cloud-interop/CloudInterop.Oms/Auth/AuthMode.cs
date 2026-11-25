namespace CloudInteropOms.Auth
{
    /// <summary>
    /// How the sample authenticates with the Cloud Interop service.
    /// </summary>
    public enum AuthMode
    {
        /// <summary>A username and password supplied by HERE.</summary>
        Basic,

        /// <summary>A JWT (an ID token) acquired from Microsoft Entra ID.</summary>
        Entra
    }
}
