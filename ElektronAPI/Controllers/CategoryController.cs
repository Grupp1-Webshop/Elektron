using ElektronAPI.Data;
using ElektronAPI.Models.Categories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ElektronAPI.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : Controller
    {
        private readonly ApplicationDbContext _context;
        public CategoryController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/categories
        [HttpGet]

        public async Task<ActionResult<IEnumerable<Category>>> Index()
        {
            if(_context.Categories == null)
            {
                return NotFound();
            }
            return Json( await _context.Categories.Include(e => e.Picture).ToListAsync());
        }
    }
}
