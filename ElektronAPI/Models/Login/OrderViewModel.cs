using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ElektronAPI.Models.Login
{
    public class OrderViewModel
    {
        [Key]
        [ScaffoldColumn(false)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int OrderId { get; set; }
        public string CustomerId { get; set; }
        public int Total { get; set; }
        public DateTime timeDate { get; set; }
    }
}
