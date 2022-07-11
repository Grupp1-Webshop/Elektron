using ElektronAPI.Models.Identity;
using ElektronAPI.Models.OrderProducts;
using System;
using System.Collections.Generic;

namespace ElektronAPI.Models.Orders
{
    public class CreateOrderViewModel
    {
        public string CustomerId { get; set; }
        public int Total { get; set; }
    }
}
