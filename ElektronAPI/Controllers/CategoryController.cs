using ElektronAPI.Data;
using ElektronAPI.Models.Categories;
using ElektronAPI.Models.Pictures;
using ElektronAPI.Models.Products;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ElektronAPI.Controllers
{
    [EnableCors("Api")]
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
            List<CategoryViewModel> categoryViewModelList = new List<CategoryViewModel>() ;
            foreach (Category category in _context.Categories.Include(e => e.Picture).Include(e => e.Products).ThenInclude(e => e.Picture))
            {
                
                CategoryViewModel categoryViewModel = new CategoryViewModel()
                {
                    CategoryId = category.CategoryId,
                    Name = category.Name,

                };
                categoryViewModel.Picture = new PictureViewModel()
                {
                    PictureId = category.Picture.PictureId,
                    Uri = category.Picture.Uri,
                    Alt = category.Picture.Alt
                };
                categoryViewModel.Products = new List<ProductViewModel>();
                foreach (Product product in category.Products)
                {
                    ProductViewModel productViewModel = new ProductViewModel()
                    {
                        ProductId = product.ProductId,
                        Name = product.Name,
                        ShortDescription = product.ShortDescription,
                        Description = product.Description,
                        Price = product.Price
                    };
                    productViewModel.Picture = new PictureViewModel()
                    {
                        PictureId = category.Picture.PictureId,
                        Uri = category.Picture.Uri,
                        Alt = category.Picture.Alt
                    };
                    categoryViewModel.Products.Add(productViewModel);
                }
                categoryViewModelList.Add(categoryViewModel);
            }
            
            return Json(categoryViewModelList);
        }
        [HttpGet("{id:int}")]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategory(int id)
        {

            if (_context.Categories == null)
            {
                return NotFound();
            }
            Category category = await _context.Categories.Include(e => e.Products).ThenInclude(e => e.Picture)
                .Include(e => e.Picture)
                .FirstOrDefaultAsync(e => e.CategoryId == id);
            if(category == null)
            {
                return NotFound();
            }

            CategoryViewModel categoryViewModel = new CategoryViewModel()
            {
                    CategoryId = category.CategoryId,
                    Name = category.Name,

            };
            categoryViewModel.Picture = new PictureViewModel()
            {
                PictureId = category.Picture.PictureId,
                Uri = category.Picture.Uri,
                Alt = category.Picture.Alt
            };
            categoryViewModel.Products = new List<ProductViewModel>();
            foreach (Product product in category.Products)
            {
                ProductViewModel productViewModel = new ProductViewModel()
                {
                    ProductId = product.ProductId,
                    Name = product.Name,
                    ShortDescription = product.ShortDescription,
                    Description = product.Description,
                    Price= product.Price
                };
                if(product.Picture != null)
                {
                    productViewModel.Picture = new PictureViewModel()
                    {
                        PictureId = product.Picture.PictureId,
                        Uri = product.Picture.Uri,
                        Alt = product.Picture.Alt
                    };
                }
                else
                {
                    productViewModel.Picture = null;
                }
                
                categoryViewModel.Products.Add(productViewModel);
             }
            

            return Json(categoryViewModel);
        }
        [Authorize(Roles = "Admin")]
        // POST: api/categories
        [HttpPost]
        public async Task<ActionResult<IEnumerable<Category>>> Index(CreateCategoryViewModel createCategoryViewModel)
        {
            if (createCategoryViewModel == null)
            {
                return BadRequest();
            }
            Category category = new Category()
            {
                Name = createCategoryViewModel.Name,
                PictureId = createCategoryViewModel.PictureId,
            };
            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            return Created($"api/categories/{category.CategoryId}", category);
        }

        [Authorize(Roles = "Admin")]
        // PUT: api/categories/{id}
        [HttpPut("{id:int}")]
        public async Task<ActionResult<IEnumerable<Category>>> Index(CreateCategoryViewModel createCategoryViewModel, int id)
        {
            if (createCategoryViewModel == null)
            {
                return BadRequest();
            }
            Category category = await _context.Categories.FindAsync(id);
            if (category == null)
            {
                return NotFound();
            }
            category.Name = createCategoryViewModel.Name;
            category.PictureId = createCategoryViewModel.PictureId;
            _context.Categories.Update(category);
            await _context.SaveChangesAsync();

            return Created($"api/categories/{category.CategoryId}", category);
        }

        [Authorize(Roles = "Admin")]
        // DELETE: api/categories/{id}
        [HttpDelete("{id:int}")]
        public async Task<ActionResult<IEnumerable<Category>>> Index( int id)
        {
            Category category = await _context.Categories.FindAsync(id);
            if (category == null)
            {
                return NotFound();
            }
            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
