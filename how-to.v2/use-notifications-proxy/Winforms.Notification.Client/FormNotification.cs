using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Winforms.Notification.Client
{
    public class FormNotification
    {
        public string title { get; set; }
        public string body { get; set; }
        public string toast { get; set; }
        public string category { get; set; }
        public string template { get; set; }
        public string id { get; set; }
        public string platform { get; set; }
        public List<NotificationForm> form { get; set; }

        public List<NotificationFormButton> buttons { get; set; }
    }

    public class NotificationForm
    {
        public string key { get; set; }
        public string label { get; set; }
        public string type { get; set; }
        public NotificationFormWidget widget { get; set; }
        public NotificationFormValidation validation { get; set; }
        
    }

    public class NotificationFormWidget
    {
        public string type { get; set; }
        public string placeholder { get; set; }
    }

    public class NotificationFormValidation
    {
        public NotificationFormValidationItem min { get; set; }
        public NotificationFormValidationItem max { get; set; }
        public NotificationFormValidationRequired required { get; set; }
    }

    public class NotificationFormValidationItem
    {
        public int arg { get; set; }
        public string invalidMessage { get; set; }
    }

    public class NotificationFormValidationRequired
    {
        public bool arg { get; set; }
    }

    public class NotificationFormButton
    {
        public string title { get; set; }
        public string type { get; set; }
        public bool cta { get; set; }
        public bool submit { get; set; }
    }
}
