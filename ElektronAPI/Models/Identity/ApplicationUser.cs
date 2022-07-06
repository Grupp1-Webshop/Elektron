using ElektronAPI.Models.Orders;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace ElektronAPI.Models.Identity
{
    public class ApplicationUser : IdentityUser
    {
        public virtual ICollection<Order> Orders { get; set; }
    }
}
