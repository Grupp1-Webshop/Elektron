using ElektronAPI.Data;
using ElektronAPI.Models.Identity;
using ElektronAPI.Models.Login;
using ElektronAPI.Models.Orders;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElektronAPI.Controllers
{
    
    public class OrderHistoryController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        public OrderHistoryController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
                _context = context;
            _userManager = userManager;
        }

        [Authorize]
        [HttpPost("api/OrderHistory/{userId}")]
        public async Task<ActionResult<OrderHistoryModel>> GetUserOrderHistory(string userId)
        {
            //search for user
            var user = await _userManager.FindByIdAsync(userId);

            if (user == null)
            {
                return Unauthorized();
            }

            OrderHistoryModel orderHistory = new OrderHistoryModel();
            orderHistory.historyOrders = new List<OrderViewModel> ();

            foreach (Order order in _context.Orders.ToList().Where(c => c.CustomerId == user.Id))
            {
                OrderViewModel orderViewModel = new OrderViewModel()
                {
                    CustomerId = order.CustomerId,
                    OrderId = order.OrderId,
                    timeDate = order.timeDate,
                    Total = order.Total,
                };
                orderHistory.historyOrders.Add(orderViewModel);
            }


            // return list of orders

            return Json(orderHistory);
        }
    }
}
