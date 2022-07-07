using ElektronAPI.Data;
using ElektronAPI.Models.Pictures;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace ElektronAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class PicturesController : Controller
    {
        private readonly ApplicationDbContext _context;
        public PicturesController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/picture
        [HttpGet]

        public async Task<ActionResult<IEnumerable<Picture>>> Index()
        {

            if (_context.Pictures == null)
            {
                return NotFound();
            }
            List<Picture> picturesList = await _context.Pictures.ToListAsync();

            return Json(picturesList);
        }
        // POST: api/categories
        [EnableCors("Api")]
        [HttpPost]
        public async Task<ActionResult<IEnumerable<Picture>>> Index([FromForm] CreatePictureViewModel createPictureView)
        {
            if (createPictureView == null)
            {
                return BadRequest();
            }
            if (createPictureView.file.Length > 0)
            {
                string uniqueFileName = Guid.NewGuid().ToString() + "_" + createPictureView.file.FileName;
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot" , uniqueFileName);
                using (var stream = System.IO.File.Create(filePath))
                {
                    await createPictureView.file.CopyToAsync(stream);
                }
                Picture picture = new Picture()
                {
                    Uri = uniqueFileName,
                    Alt = createPictureView.Alt
                };
                _context.Pictures.Add(picture);
                await _context.SaveChangesAsync();
                return Created($"api/categories/{picture.PictureId}", picture);
            }
            else
            {
                return BadRequest();
            }
        }
        // DELETE: api/categories/{id}
        [HttpDelete("{id:int}")]
        public async Task<ActionResult<IEnumerable<Picture>>> Index(int id)
        {
            Picture picture = await _context.Pictures.FindAsync(id);

            if (picture == null)
            {
                return NotFound();
            }
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", picture.Uri);
            System.IO.File.Delete(filePath);
            _context.Pictures.Remove(picture);
            await _context.SaveChangesAsync();

            return Ok();
        }

    }
}
