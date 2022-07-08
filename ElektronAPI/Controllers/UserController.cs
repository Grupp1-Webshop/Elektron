using ElektronAPI.Data;
using ElektronAPI.Models.Identity;
using ElektronAPI.Models.User;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ElektronAPI.Controllers
{
    [EnableCors("Api")]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ApplicationDbContext _context;
        public UserController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, ApplicationDbContext context)
        {
            _userManager = userManager;
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ApplicationUser>>> index()
        {
            var user = await _userManager.GetUserAsync(HttpContext.User);
            if (user == null) return NotFound();
            var role = await _userManager.GetRolesAsync(user);
            UserViewModel userViewModel = new UserViewModel()
            {
                UserId = user.Id,
                UserName = user.UserName,
                UserRole = (List<string>)role
            };
            return Json(userViewModel);
        }
        [HttpPut]
        public async Task<ActionResult<IEnumerable<ApplicationUser>>> index(UpdateUserViewModel updateUserViewModel)
        {
            PasswordHasher<ApplicationUser> hasher = new PasswordHasher<ApplicationUser>();
            var user = await _userManager.GetUserAsync(HttpContext.User);
            if (user == null) return NotFound();
            var result = _userManager.CheckPasswordAsync(user, updateUserViewModel.OldPassword);
            if (result.IsCompletedSuccessfully)
            {
                user.PasswordHash = hasher.HashPassword(null, updateUserViewModel.Password);

                await _userManager.UpdateAsync(user);
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
        [HttpGet("UserList")]
        public async Task<ActionResult<IEnumerable<ApplicationUser>>> List()
        {
            List<UserViewModel> List = new List<UserViewModel>();
            foreach(ApplicationUser user in _context.Users)
            {
                
                UserViewModel userViewModel = new UserViewModel()
                {
                    UserId = user.Id,
                    UserName = user.UserName,
                };
                
                List.Add(userViewModel);
            }
            foreach(UserViewModel UserVM in List)
            {
                var User = await _userManager.FindByIdAsync(UserVM.UserId);
                var Role = await _userManager.GetRolesAsync(User);
                UserVM.UserRole = (List<string>)Role;
            }
            return Ok(List);
        }
    }
}
