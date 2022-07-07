using ElektronAPI.Data;
using ElektronAPI.Models.Identity;
using ElektronAPI.Models.Login;
using ElektronAPI.Models.Orders;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElektronAPI.Controllers
{
    public class RegisterController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ApplicationDbContext _context;
        public RegisterController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, ApplicationDbContext context)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _context = context;
        }

        [HttpPost("Register")]
        public async Task<ActionResult> Register(Register register)
        {
            var user = new ApplicationUser()
            {
                UserName = register.Username,
                Email = register.Email,
            };

            var result = await _userManager.CreateAsync(user, register.Password);

            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);

                }

                return ValidationProblem();
            }

            await _userManager.AddToRoleAsync(user, "User");

            return StatusCode(201);
        }

        [HttpPost("Login")]
        public async Task<ActionResult<UserViewModel>> Login(Login login)
        {
            //search for user
            var user = await _userManager.FindByNameAsync(login.Username);
            // check if user is found and pass is correct
            if (user == null || !await _userManager.CheckPasswordAsync(user, login.Password))
            {
                return Unauthorized();
            }

            var result = await _signInManager.PasswordSignInAsync(user,
                           login.Password, true, lockoutOnFailure: true);

            if (result.Succeeded)
            {
                List<OrderViewModel> orders = new List<OrderViewModel>();

                foreach (Order order in _context.Orders.ToList())
                {
                    OrderViewModel orderViewModel = new OrderViewModel
                    {
                        CustomerId = order.CustomerId,
                        OrderId = order.OrderId,
                        timeDate = order.timeDate,
                        Total = order.Total,
                    };
                    orders.Add(orderViewModel);
                }

                UserViewModel userViewModel = new UserViewModel()
                {
                    Name = user.UserName,
                    Email = user.Email,
                    Orders = orders
                };


                return Json(userViewModel);
            }
            else
            {
                return BadRequest();
            }

        }


        [Authorize]
        [HttpPost("Logout")]
        public async Task<ActionResult> Logout()
        {

            await _signInManager.SignOutAsync();


            /*return RedirectToPage("/"); */

            return StatusCode(200);
        }
    }
}
