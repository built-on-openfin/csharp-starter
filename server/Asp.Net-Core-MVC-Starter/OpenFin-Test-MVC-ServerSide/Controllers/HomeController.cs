using Microsoft.AspNetCore.Mvc;
using OpenFin_Test_MVC_ServerSide.Models;
using System.Diagnostics;

namespace OpenFin_Test_MVC_ServerSide.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost]
        public IActionResult ContextReceived(string type, string name)
        {
            Debug.WriteLine("Received from client :" + type + "/" + name);
            var serverMessage = "From Server: " + "Received context from client - " + type + "/" + name;
            return Json(new { result = serverMessage });
        }

        [HttpPost]
        public ActionResult SendContext()
        {
            Debug.WriteLine("Received SendContext request from client.");
            // ViewBag.JavascriptFunction = string.Format("SendContext({0}, {1})", "john.doe@acme.com", "John Doe");
            // return View("Index");
            return Json(new { email = "john.doe@acme.com", name="John Doe" });
        }
    }
}
