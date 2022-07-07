using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace ElektronAPI.Models.Pictures
{
    public class CreatePictureViewModel
    {
        [Required]
        [StringLength(50)]
        public string Alt { get; set; }
        public IFormFile file { get; set; }
    }
}
