using ElektronAPI.Models.Orders;
using ElektronAPI.Models.Products;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ElektronAPI.Models.OrderProducts
{
    public class OrderProduct
    {
        [Key]
        [ScaffoldColumn(false)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int OrderProductId { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public int OrderId { get; set; }
        public Order Order { get; set; }
        public string ProductName { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }
        
    }
}
