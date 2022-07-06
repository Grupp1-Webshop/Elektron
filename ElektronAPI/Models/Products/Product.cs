using ElektronAPI.Models.Categories;
using ElektronAPI.Models.OrderProducts;
using ElektronAPI.Models.Pictures;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ElektronAPI.Models.Products
{
    public class Product
    {
        [Key]
        [ScaffoldColumn(false)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProductId { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        [Required]
        public string ShortDescription { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int Price { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public int? PictureId { get; set; }
        public Picture Picture { get; set; }

        public ICollection<OrderProduct> OrderProducts { get; set; }

    }
}
