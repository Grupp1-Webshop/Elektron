using ElektronAPI.Models.Orders;
using ElektronAPI.Models.Identity;
using ElektronAPI.Models.OrderProducts;
using System;
using System.Collections.Generic;
using ElektronAPI.Models.Login;

namespace ElektronAPI.Models.Orders
{
    public class OrderViewModel
    {
        public int OrderId { get; set; }
        public UserViewModel Customer { get; set; }
        public string CustomerId { get; set; }
        public List<OrderProductViewModel> OrderProducts { get; set; }
        public int Total { get; set; }
        public DateTime timeDate { get; set; }
    }
}
