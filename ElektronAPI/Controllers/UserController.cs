using Microsoft.AspNetCore.Mvc;

namespace ElektronAPI.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
