﻿namespace ElektronAPI.Models.OrderProducts
{
    public class CreateOrderProductViewModel
    {
        public int ProductId { get; set; }
        public int OrderId { get; set; }
        public string ProductName { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }
    }
}
