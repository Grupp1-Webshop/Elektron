using ElektronAPI.Models.Orders;
using ElektronAPI.Models.Identity;
using ElektronAPI.Models.OrderProducts;
using System;
using System.Collections.Generic;
using ElektronAPI.Models.Products;

namespace ElektronAPI.Models.OrderProducts
{
    public class OrderProductViewModel
    {
        public int OrderProductId { get; set; }
        public int ProductId { get; set; }
        public int OrderId { get; set; }
        public string ProductName { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }
    }
}
