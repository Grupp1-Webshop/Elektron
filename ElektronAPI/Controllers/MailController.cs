using Microsoft.AspNetCore.Mvc;

namespace ElektronAPI.Controllers
{
    public class MailController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
