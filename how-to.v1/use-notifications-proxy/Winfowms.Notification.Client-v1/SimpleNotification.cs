using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Winforms.Notification.Client
{
    public class SimpleNotification
    {
        public string title { get; set; }
        public string body { get; set; }
        public string toast { get; set; }
        public string category { get; set; }
        public string template { get; set; }
        public string id { get; set; }
        public string platform { get; set; }
    }
}


/*
 title: "Simple Notification",
		body: "This is a simple notification",
		toast: "transient",
		category: "default",
		template: "markdown",
		id: randomUUID(),
		platform: activePlatform
 * */