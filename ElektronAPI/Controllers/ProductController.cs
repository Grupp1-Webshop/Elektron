using ElektronAPI.Data;
using ElektronAPI.Models.Categories;
using ElektronAPI.Models.Products;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ElektronAPI.Controllers
{
    [EnableCors("Api")]
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
                    CategoryId = product.CategoryId,
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

        [HttpGet("{id:int}")]
        public async Task<ActionResult<IEnumerable<Product>>> getProduct(int id)
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            Product product = await _context.Products.Include(e => e.Category)
                .Include(e => e.Picture)
                .FirstOrDefaultAsync(e => e.ProductId == id);
            if (product == null)
            {
                return NotFound();
            }

             ProductViewModel productViewModel = new ProductViewModel()
             {
                ProductId = product.ProductId,
                Name = product.Name,
                ShortDescription = product.ShortDescription,
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

             return Json(productViewModel);
        }
        // POST: api/product
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<ActionResult<IEnumerable<Product>>> Index(CreateProductViewModel createProductViewModel)
        {
            if (createProductViewModel == null)
            {
                return BadRequest();
            }
            Product product = new Product()
            {
                Name = createProductViewModel.Name,
                ShortDescription = createProductViewModel.ShortDescription,
                Description = createProductViewModel.Description,
                Price = createProductViewModel.Price,
                CategoryId = createProductViewModel.CategoryId,
                PictureId = createProductViewModel.PictureId
            };
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return Created($"api/product/{product.ProductId}", product);
        }

        
        // PUT: api/product/{id}
        [Authorize(Roles = "Admin")]
        [HttpPut("{id:int}")]
        public async Task<ActionResult<IEnumerable<Category>>> Index(CreateProductViewModel createProductViewModel, int id)
        {
            if (createProductViewModel == null)
            {
                return BadRequest();
            }
            Product product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            product.Name = createProductViewModel.Name;
            product.ShortDescription = createProductViewModel.ShortDescription;
            product.Description = createProductViewModel.Description;
            product.Price = createProductViewModel.Price;
            product.CategoryId = createProductViewModel.CategoryId;
            product.PictureId = createProductViewModel.PictureId;
            _context.Products.Update(product);
            await _context.SaveChangesAsync();

            return Created($"api/categories/{product.ProductId}", product);
        }


        // DELETE: api/categories/{id}
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id:int}")]
        public async Task<ActionResult<IEnumerable<Category>>> Index(int id)
        {
            Product product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
