using ElektronAPI.Models.Identity;
using ElektronAPI.Models.UserRoles;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ElektronAPI.Controllers
{
    [Authorize(Roles = "Admin")]
    [EnableCors("Api")]
    [Route("api/[controller]")]
    [ApiController]
    public class UserRolesController : Controller
    {
        private RoleManager<IdentityRole> _roleManager;
        private UserManager<ApplicationUser> _userManager;

        public UserRolesController(RoleManager<IdentityRole> roleManager, UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }
        [HttpPost]
        public async Task<ActionResult<IEnumerable<ApplicationUser>>> Index(UserRolesViewModel userRolesViewModel)
        {
            var admin = await _roleManager.FindByIdAsync(userRolesViewModel.RoleId);
            var user = await _userManager.FindByIdAsync(userRolesViewModel.UserId);
            if (admin == null)
            {
                return NotFound();
            }
            if (user == null)
            {
                return NotFound();
            }
            IdentityResult result = await _userManager.AddToRoleAsync(user, admin.Name);
            if (result.Succeeded)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
