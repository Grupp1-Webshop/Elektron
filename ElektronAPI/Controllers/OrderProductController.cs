using ElektronAPI.Data;
using ElektronAPI.Models.OrderProducts;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ElektronAPI.Controllers
{
    [EnableCors("Api")]
    [Route("api/[controller]")]
    [ApiController]
    public class OrderProductController : Controller
    {
        private readonly ApplicationDbContext _context;
        public OrderProductController(ApplicationDbContext context)
        {
            _context = context;
        }
        // POST: api/orders
        [HttpPost]
        public async Task<ActionResult<IEnumerable<OrderProduct>>> Index(CreateOrderProductViewModel createOrderProductViewModel)
        {
            if (createOrderProductViewModel == null)
            {
                return BadRequest();
            }
            OrderProduct orderProduct = new OrderProduct()
            {
                ProductId = createOrderProductViewModel.ProductId,
                OrderId = createOrderProductViewModel.OrderId,
                ProductName = createOrderProductViewModel.ProductName,
                Price = createOrderProductViewModel.Price,
                Quantity = createOrderProductViewModel.Quantity
            };
            _context.OrderProducts.Add(orderProduct);
            await _context.SaveChangesAsync();

            return Created($"api/orderProduct/{orderProduct.OrderId}", orderProduct);
        }
    }
}
