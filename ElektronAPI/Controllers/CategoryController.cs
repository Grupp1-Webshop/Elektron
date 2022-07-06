﻿using ElektronAPI.Data;
using ElektronAPI.Models.Categories;
using ElektronAPI.Models.Products;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections;
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
            List<CategoryViewModel> categoryViewModelList = new List<CategoryViewModel>() ;
            foreach (Category category in _context.Categories.Include(e => e.Picture).Include(e => e.Products))
            {
                
                CategoryViewModel categoryViewModel = new CategoryViewModel()
                {
                    CategoryId = category.CategoryId,
                    Name = category.Name,
                    Picture = category.Picture,

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
                        Picture = product.Picture,
                    };
                    categoryViewModel.Products.Add(productViewModel);
                }
                categoryViewModelList.Add(categoryViewModel);
            }
            
            return Json(categoryViewModelList);
        }
    }
}
