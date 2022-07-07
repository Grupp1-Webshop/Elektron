using ElektronAPI.Models.Orders;
using System.Collections.Generic;

namespace ElektronAPI.Models.Login
{
    public class UserViewModel
    {
        public string Name { get; set; }
        public string Email { get; set; }
        
        public List<OrderViewModel> Orders { get; set; }
    }
}
