using ElektronAPI.Data;
using ElektronAPI.Models.Products;
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
    public class ProductController : Controller
    {
        private readonly ApplicationDbContext _context;
        public ProductController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/product
        [HttpGet]

        public async Task<ActionResult<IEnumerable<Product>>> Index()
        {
            if (_context.Categories == null)
            {
                return NotFound();
            }
            return await _context.Products.Include(e => e.Category).ToListAsync();
        }
    }
}
