using ElektronAPI.Data;
using ElektronAPI.Models.Categories;
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
            if (_context.Products == null)
            {
                return NotFound();
            }
            List<ProductViewModel> productViewModelsList = new List<ProductViewModel>();
            foreach (Product product in _context.Products.Include(e => e.Picture).Include(e => e.Category))
            {

                ProductViewModel productViewModel = new ProductViewModel()
                {
                    ProductId = product.ProductId,
                    Name = product.Name,
                    ShortDescription= product.ShortDescription,
                    Description = product.Description,
                    Price = product.Price,
                    Picture = product.Picture,
                };
                Category category = product.Category;
                productViewModel.Category = new CategoryViewModel()
                {
                    CategoryId = category.CategoryId,
                    Name = category.Name,
                    Picture = category.Picture,
                };
                productViewModelsList.Add(productViewModel);
            }

            return Json(productViewModelsList);
        }
    }
}
