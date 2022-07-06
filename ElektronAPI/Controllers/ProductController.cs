using Microsoft.AspNetCore.Mvc;

namespace ElektronAPI.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
