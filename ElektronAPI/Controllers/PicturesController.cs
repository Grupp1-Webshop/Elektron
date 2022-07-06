using Microsoft.AspNetCore.Mvc;

namespace ElektronAPI.Controllers
{
    public class PicturesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
