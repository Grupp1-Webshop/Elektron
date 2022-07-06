using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ElektronAPI.Models.Pictures
{
    public class Picture
    {
        [Key]
        [ScaffoldColumn(false)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PictureId { get; set; }
        [Required]
        [StringLength(50)]
        public string Uri { get; set; }
        public string Alt { get; set; }
    }
}
