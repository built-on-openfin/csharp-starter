using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Windows;
using Newtonsoft.Json.Linq;
using Openfin.Desktop.Messaging;
using Fin = Openfin.Desktop;
using Winforms.Notification.Client;
using Newtonsoft.Json;

namespace Winfowms.Notification.Client_v1
{
    public partial class Form1 : Form
    {
        private SynchronizationContext UISyncCtxt;
        private ChannelClient channelClient;
        const string ChannelName = "user-data";
        public Form1()
        {
            InitializeComponent();
            UISyncCtxt = SynchronizationContext.Current;
            txtStatus.Text = string.Empty;
        }

        private void btnConnectToChannel_Click(object sender, EventArgs e)
        {
            var runtimeOptions = new Fin.RuntimeOptions
            {
                Version = "stable",
                EnableRemoteDevTools = true,
                RuntimeConnectTimeout = 20000
            };

            var fin = Fin.Runtime.GetRuntimeInstance(runtimeOptions);

            fin.Error += (s, err) =>
            {
                Console.Write(err);
                showStatus("Runtime error: " + err.ToString());
            };

            fin.Connect(() =>
            {
                showStatus("Connected to Runtime.");

                channelClient = fin.InterApplicationBus.Channel.CreateClient("notification-channel");

                channelClient.Opened += (s, error) =>
                {
                    channelClient.RegisterTopic<string, string>("form-notification-response", (payload) =>
                    {
                        showStatus($"Received response - {payload}");

                        return "";
                    });
                };

                channelClient.Closed += (s, erx) =>
                {
                    showStatus("Disconnected from channel");
                };

                try
                {
                    channelClient.ConnectAsync();
                    showStatus("Client Connected to channel");
                    btnSimpleNotification.Enabled = true;
                    btnUserInputNotification.Enabled = true;
                }
                catch (Exception ex)
                {
                    showStatus("Client Connect Failed" + ex.Message);
                    btnSimpleNotification.Enabled = true;
                    btnUserInputNotification.Enabled = true;
                }                
            });
        }

        private void _Runtime_Timeout(object sender, EventArgs e)
        {
            showStatus("Timeout period reached. Unable to connect to Runtime.");
        }

        private async void btnSimpleNotification_Click(object sender, EventArgs e)
        {
            if (channelClient != null)
            {
                var payload = createSimpleNotification();

                await channelClient.DispatchAsync<SimpleNotification>("send-simple-notification", payload);

                showStatus("Simple Notification dispatched.");
            }

        }

        private async void btnUserInputNotification_Click(object sender, EventArgs e)
        {
            if(channelClient != null)
            {
                var payload = createFormInputNotification();

                await channelClient.DispatchAsync<FormNotification>("show-form-notification", payload);

                showStatus("Client Input Notification dispatched.");
            }
        }

        private void showStatus(string message)
        {
            if (!string.IsNullOrEmpty(message))
            {
                UISyncCtxt.Send(_ =>
                {
                    txtStatus.Text += message + Environment.NewLine;
                }, null);
                
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

        
    }
}
