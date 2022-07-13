using ElektronAPI.Models.Pictures;
using ElektronAPI.Models.Products;
using System.Collections.Generic;

namespace ElektronAPI.Models.Categories
{
    public class CategoryViewModel
    {
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public int? PictureId { get; set; }
        public PictureViewModel Picture { get; internal set; }
        public List<ProductViewModel> Products { get; set; }
    }
}
