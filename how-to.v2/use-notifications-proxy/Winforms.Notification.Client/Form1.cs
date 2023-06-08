using System;
using System.Diagnostics;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Forms;
using Newtonsoft.Json;
using OpenFin.Net.Adapter;
using OpenFin.Net.Adapter.Channels;
using OpenFin.Net.Adapter.Logging;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.Tab;

namespace Winforms.Notification.Client
{
    public partial class Form1 : Form
    {
        private IRuntime runtime;
        private IChannelProvider provider;
        private IChannels channels;
        private IChannelClient channelClient;
        private SynchronizationContext UISyncCtxt;

        public Form1()
        {
            InitializeComponent();
            UISyncCtxt = SynchronizationContext.Current;
            txtStatus.Text = string.Empty;
        }

        private async void btnConnectToChannel_Click(object sender, EventArgs e)
        {
            runtime = new RuntimeFactory()  
                .GetRuntimeInstance(new RuntimeOptions
                {
                    Version = "stable",
                    UUID = "my-winform-workspace",
                    LicenseKey = "openfin-demo-license-key"
                });

            runtime.Connected += Runtime_Connected;
            runtime.Disconnected += Runtime_Disconnected;

            await runtime.ConnectAsync();

            channels = runtime.GetService<IChannels>();

            channelClient = channels.CreateClient("notification-channel");

            channelClient.Opened += (s, e) =>
            {
                channelClient.RegisterTopic<string, string>("form-notification-response", (payload) =>
                {
                    UISyncCtxt.Send(_ =>
                            {
                                showStatus($"Received response - {payload}");
                            }, null);

                    return "";
                });

                
            };

            channelClient.Closed += (s, e) =>
            {
                UISyncCtxt.Send(_ =>
                {
                    showStatus("Disconnected from channel");
                }, null);
            };

            try
            {
                await channelClient.ConnectAsync();
                showStatus("Client Connected to channel");
                btnSimpleNotification.Enabled = true;
                btnUserInputNotification.Enabled = true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Client Failed");
                showStatus("Client Connect Failed" + ex.Message);
                btnSimpleNotification.Enabled = true;
                btnUserInputNotification.Enabled = true;
            }
        }

        private void Runtime_Connected(object? sender, EventArgs e)
        {
            showStatus("Client Connected to runtime");
        }

        private void Runtime_Disconnected(object? sender, EventArgs e)
        {
            showStatus("Client has been disconnected from runtime");
        }

        private void btnSimpleNotification_Click(object sender, EventArgs e)
        {
            if(channelClient != null)
            {
                var payload = createSimpleNotification();

                channelClient.DispatchAsync("send-simple-notification", payload);

                showStatus("Simple Notification dispatched.");
            }
        }


        private void btnUserInputNotification_Click(object sender, EventArgs e)
        {
            if (channelClient != null)
            {
                var payload = createFormInputNotification();                

                channelClient.DispatchAsync("show-form-notification", payload);
                showStatus("Client Input Notification dispatched.");
            }
        }

        private SimpleNotification createSimpleNotification()
        {
            Guid notificationUUID = Guid.NewGuid();

            return new SimpleNotification
            {
                title = "Simple Notification",
                body = "This is a simple notification",
                toast = "transient",
                category = "default",
                template = "markdown",
                id = notificationUUID.ToString(),
                platform = "my-platform",
            };
        }

        private FormNotification createFormInputNotification()
        {
            Guid notificationUUID = Guid.NewGuid();

            var notification = new FormNotification();
            notification.title = "Form Notification";
            notification.body = "This is a notification that has form data";
            notification.toast = "transient";
            notification.category = "default";
            notification.template = "markdown";
            notification.id = notificationUUID.ToString();
            notification.platform = "my-platform";

            notification.form = new List<NotificationForm>();

            var newForm = new NotificationForm();
            newForm.key = "notes";
            newForm.label = "Notes";
            newForm.type = "string";

            newForm.widget = new NotificationFormWidget();
            newForm.widget.type = "Text";
            newForm.widget.placeholder = "Enter some text";

            newForm.validation = new NotificationFormValidation();
            newForm.validation.min = new NotificationFormValidationItem { arg = 7, invalidMessage = "Must be at least 7 characters" };
            newForm.validation.max = new NotificationFormValidationItem { arg = 20, invalidMessage = "Cannot be more than 20 characters" };
            newForm.validation.required = new NotificationFormValidationRequired { arg = true };

            notification.form.Add(newForm);

            notification.buttons = new List<NotificationFormButton>();
            notification.buttons.Add(new NotificationFormButton { title = "Save", type = "button", cta = true, submit = true });
            notification.buttons.Add(new NotificationFormButton { title = "Cancel", type = "button", cta = false, submit = false });

            return notification;
        }

        private void showStatus(string message)
        {
            if (!string.IsNullOrEmpty(message))
            {
                txtStatus.Text +=  message + Environment.NewLine;
            }
        }

        
    }
}