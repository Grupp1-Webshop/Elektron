using ElektronAPI.Models.Mail;
using MailKit.Security;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using MimeKit.Text;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace ElektronAPI.Controllers
{
    [EnableCors("Api")]
    [Route("api/[controller]")]
    [ApiController]
    public class MailController : Controller
    {
        // POST: api/mail
        [HttpPost]
        public async Task<ActionResult> Index(CreateMailViewModel createMailViewModel)
        {
            if (createMailViewModel == null)
            {
                return BadRequest();
            }
            MailMessage mail = new MailMessage("Elektron.Lexicon@outlook.com", "Elektron.Lexicon@outlook.com", createMailViewModel.Subject, createMailViewModel.Subject);
            using var smtp = new SmtpClient("smtp-mail.outlook.com");
            smtp.Port = 587;
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtp.EnableSsl = true;
            System.Net.NetworkCredential credentials =
            new System.Net.NetworkCredential("Elektron.Lexicon@outlook.com", "Uk?-fK74.mCT/(7k");
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = credentials;
            smtp.Send(mail);
            return Ok();
        }
    }
}
