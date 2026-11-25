using System;
using System.Linq;
using System.Windows;
using CloudInteropOms.Auth;

namespace CloudInteropOms
{
    /// <summary>
    /// Edits the same settings as appsettings.json. The values start as the current settings, can be reset
    /// to appsettings.json, and are saved per user when the window is closed with Save.
    /// </summary>
    public partial class SettingsWindow : Window
    {
        public SettingsWindow(AppSettings current)
        {
            InitializeComponent();

            AuthModeBox.ItemsSource = Enum.GetValues(typeof(AuthMode));
            ContextGroupBox.ItemsSource = MainWindow.ContextGroups.Select(group => group.Name).ToList();
            SavedPathText.Text = @"Saved for your user in %LOCALAPPDATA%\HERE\Samples\CSharp\CloudInterop.Oms\settings.json. The password is never saved.";
            SavedPathText.ToolTip = AppSettings.SavedPath;

            ShowSettings(current);
        }

        /// <summary>
        /// The saved settings, once the window has been closed with Save.
        /// </summary>
        public AppSettings? Result { get; private set; }

        private void ShowSettings(AppSettings settings)
        {
            UrlBox.Text = ShowValue(settings.CloudInterop.Url);
            PlatformIdBox.Text = settings.CloudInterop.PlatformId;
            SourceIdBox.Text = settings.CloudInterop.SourceId;
            ContextGroupBox.Text = settings.CloudInterop.DefaultContextGroup;
            RetryLimitBox.Text = settings.CloudInterop.ReconnectRetryLimit.ToString();

            AuthModeBox.SelectedItem = settings.AuthMode;
            UsernameBox.Text = settings.Basic.Username;

            ClientIdBox.Text = ShowValue(settings.Entra.ClientId);
            TenantIdBox.Text = ShowValue(settings.Entra.TenantId);
            AuthenticationIdBox.Text = ShowValue(settings.Entra.AuthenticationId);
            ScopesBox.Text = string.Join(", ", settings.Entra.Scopes);
            LoginHintBox.Text = ShowValue(settings.Entra.LoginHint);
            UseBrokerCheck.IsChecked = settings.Entra.UseBroker;

            ErrorText.Visibility = Visibility.Collapsed;
        }

        private void OnResetClick(object sender, RoutedEventArgs e)
        {
            ShowSettings(AppSettings.LoadDefaults());
        }

        private void OnSaveClick(object sender, RoutedEventArgs e)
        {
            var error = Validate();
            if (error != null)
            {
                ErrorText.Text = error;
                ErrorText.Visibility = Visibility.Visible;
                return;
            }

            var settings = new AppSettings
            {
                AuthMode = (AuthMode)AuthModeBox.SelectedItem,
                CloudInterop = new CloudInteropOptions
                {
                    Url = UrlBox.Text.Trim(),
                    PlatformId = PlatformIdBox.Text.Trim(),
                    SourceId = SourceIdBox.Text.Trim(),
                    DefaultContextGroup = ContextGroupBox.Text.Trim(),
                    ReconnectRetryLimit = int.Parse(RetryLimitBox.Text.Trim())
                },
                Basic = new BasicOptions { Username = UsernameBox.Text.Trim() },
                Entra = new EntraOptions
                {
                    ClientId = ClientIdBox.Text.Trim(),
                    TenantId = TenantIdBox.Text.Trim(),
                    AuthenticationId = AuthenticationIdBox.Text.Trim(),
                    Scopes = ScopesBox.Text.Split(new[] { ',', ' ' }, StringSplitOptions.RemoveEmptyEntries).ToList(),
                    LoginHint = LoginHintBox.Text.Trim(),
                    UseBroker = UseBrokerCheck.IsChecked == true
                }
            };

            settings.Save();
            Result = settings;
            DialogResult = true;
        }

        private string? Validate()
        {
            var url = UrlBox.Text.Trim();
            if (url.Length > 0
                && (!Uri.TryCreate(url, UriKind.Absolute, out var uri) || (uri.Scheme != Uri.UriSchemeHttps && uri.Scheme != Uri.UriSchemeHttp)))
            {
                return "The service url must be an http or https url, for example https://cloud-interop.example.com.";
            }

            if (string.IsNullOrWhiteSpace(PlatformIdBox.Text))
            {
                return "Enter a platform id.";
            }

            if (string.IsNullOrWhiteSpace(SourceIdBox.Text) || SourceIdBox.Text.Contains("::"))
            {
                return "Enter a source id that does not contain ::.";
            }

            if (!int.TryParse(RetryLimitBox.Text.Trim(), out var retries) || retries < 0)
            {
                return "Reconnect attempts must be a whole number of 0 or more.";
            }

            return null;
        }

        /// <summary>
        /// Show placeholders such as &lt;APPLICATION_CLIENT_ID&gt; as empty boxes rather than as values.
        /// </summary>
        private static string ShowValue(string value)
        {
            return AppSettings.IsConfigured(value) ? value : "";
        }
    }
}
