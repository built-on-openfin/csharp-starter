using System;
using System.Collections.Generic;
using System.IO;
using CloudInteropOms.Auth;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

namespace CloudInteropOms
{
    /// <summary>
    /// The settings for the sample. appsettings.json next to the executable supplies the defaults,
    /// the settings saved from the Settings window replace them, and command line arguments win over both.
    /// </summary>
    public sealed class AppSettings
    {
        private static readonly JsonSerializerSettings JsonSettings = new JsonSerializerSettings
        {
            ContractResolver = new CamelCasePropertyNamesContractResolver(),
            Converters = { new StringEnumConverter() },
            ObjectCreationHandling = ObjectCreationHandling.Replace,
            Formatting = Formatting.Indented
        };

        public AuthMode AuthMode { get; set; } = AuthMode.Basic;

        public CloudInteropOptions CloudInterop { get; set; } = new CloudInteropOptions();

        public BasicOptions Basic { get; set; } = new BasicOptions();

        public EntraOptions Entra { get; set; } = new EntraOptions();

        public static string DefaultsPath => Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "appsettings.json");

        /// <summary>
        /// Where the Settings window saves, so that values entered in the UI are remembered between runs.
        /// </summary>
        public static string SavedPath => Path.Combine(
            Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
            "HERE", "Samples", "CSharp", "CloudInterop.Oms", "settings.json");

        /// <summary>
        /// The settings in appsettings.json, ignoring anything saved from the UI.
        /// </summary>
        public static AppSettings LoadDefaults()
        {
            return Read(DefaultsPath) ?? new AppSettings();
        }

        /// <summary>
        /// Load the saved settings (or appsettings.json if nothing has been saved) and apply any command
        /// line overrides, for example <c>--sourceId oms-2 --contextGroup purple</c> so that two instances
        /// can run side by side.
        /// </summary>
        public static AppSettings Load(string[] args)
        {
            var settings = Read(SavedPath) ?? LoadDefaults();

            for (var i = 0; i < args.Length - 1; i++)
            {
                var value = args[i + 1];
                switch (args[i].TrimStart('-').ToLowerInvariant())
                {
                    case "sourceid":
                        settings.CloudInterop.SourceId = value;
                        i++;
                        break;
                    case "contextgroup":
                        settings.CloudInterop.DefaultContextGroup = value;
                        i++;
                        break;
                    case "authmode":
                        settings.AuthMode = (AuthMode)Enum.Parse(typeof(AuthMode), value, ignoreCase: true);
                        i++;
                        break;
                    case "username":
                        settings.Basic.Username = value;
                        i++;
                        break;
                }
            }

            return settings;
        }

        /// <summary>
        /// Save these settings for the next run. The password is never part of the settings.
        /// </summary>
        public void Save()
        {
            Directory.CreateDirectory(Path.GetDirectoryName(SavedPath)!);
            File.WriteAllText(SavedPath, JsonConvert.SerializeObject(this, JsonSettings));
        }

        public AppSettings Clone()
        {
            return JsonConvert.DeserializeObject<AppSettings>(JsonConvert.SerializeObject(this, JsonSettings), JsonSettings)!;
        }

        private static AppSettings? Read(string path)
        {
            return File.Exists(path)
                ? JsonConvert.DeserializeObject<AppSettings>(File.ReadAllText(path), JsonSettings)
                : null;
        }

        /// <summary>
        /// Values that are empty or still wrapped in angle brackets, such as the
        /// &lt;APPLICATION_CLIENT_ID&gt; placeholder, are treated as not configured.
        /// </summary>
        public static bool IsConfigured(string? value)
        {
            return !string.IsNullOrWhiteSpace(value) && !value!.Trim().StartsWith("<", StringComparison.Ordinal);
        }
    }

    public sealed class CloudInteropOptions
    {
        public string Url { get; set; } = "";

        public string PlatformId { get; set; } = "cloud-interop";

        public string SourceId { get; set; } = "dotnet-oms";

        public string DefaultContextGroup { get; set; } = "green";

        public int ReconnectRetryLimit { get; set; } = 30;
    }

    public sealed class BasicOptions
    {
        public string Username { get; set; } = "";
    }

    public sealed class EntraOptions
    {
        public string ClientId { get; set; } = "";

        /// <summary>
        /// The directory (tenant) id or a verified domain. When empty the authority is
        /// <c>organizations</c>, so the account used at sign in determines the tenant.
        /// </summary>
        public string TenantId { get; set; } = "";

        /// <summary>
        /// The id HERE gives you once they have registered your token issuer.
        /// </summary>
        public string AuthenticationId { get; set; } = "";

        public List<string> Scopes { get; set; } = new List<string> { "openid", "profile" };

        public string LoginHint { get; set; } = "";

        /// <summary>
        /// Sign in through the Windows account manager (WAM) instead of the system browser.
        /// </summary>
        public bool UseBroker { get; set; }
    }
}
