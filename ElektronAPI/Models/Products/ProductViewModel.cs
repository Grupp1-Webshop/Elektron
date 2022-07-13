using ElektronAPI.Models.Categories;
using ElektronAPI.Models.Pictures;

namespace ElektronAPI.Models.Products
{
    public class ProductViewModel
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string ShortDescription { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public int CategoryId { get; set; }
        public CategoryViewModel? Category { get; set; }
        public PictureViewModel Picture { get; set; }
    }
}
