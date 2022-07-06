using ElektronAPI.Models.Pictures;
using ElektronAPI.Models.Products;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ElektronAPI.Models.Categories
{
    public class Category
    {
        [Key]
        [ScaffoldColumn(false)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CategoryId { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        public int? PictureId { get; set; }
        public Picture Picture { get; internal set; }
        public virtual IEnumerable<Product> Products { get; set; }
    }
}
