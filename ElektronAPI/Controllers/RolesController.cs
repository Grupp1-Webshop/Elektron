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
    public class RolesController : Controller
    {

        private RoleManager<IdentityRole> _roleManager;
        public RolesController(RoleManager<IdentityRole> roleMgr)
        {
            _roleManager = roleMgr;
        }
        // GET: api/Roles
        [HttpGet]

        public async Task<ActionResult<IEnumerable<IdentityRole>>> Index()
        {

            return Json(_roleManager.Roles);
        }
    }
}
