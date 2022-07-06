using ElektronAPI.Models.Identity;
using ElektronAPI.Models.OrderProducts;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ElektronAPI.Models.Orders
{
    public class Order
    {
        [Key]
        [ScaffoldColumn(false)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int OrderId { get; set; }
        public ApplicationUser Customer { get; set; }
        public string CustomerId { get; set; }
        public virtual ICollection<OrderProduct> OrderProducts { get; set; }
        public int Total { get; set; }
        public DateTime timeDate { get; set; }

    }
}
