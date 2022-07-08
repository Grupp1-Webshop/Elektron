﻿using ElektronAPI.Data;
using ElektronAPI.Models.Categories;
using ElektronAPI.Models.OrderProducts;
using ElektronAPI.Models.Orders;
using ElektronAPI.Models.Products;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ElektronAPI.Controllers
{
    [EnableCors("Api")]
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : Controller
    {
        private readonly ApplicationDbContext _context;
        public OrderController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<Order>>> Index()
        {

            if (_context.Categories == null)
            {
                return NotFound();
            }


            List<OrderViewModel> orderViewModelList = new List<OrderViewModel>();
            foreach (Order order in _context.Orders.Include(e => e.OrderProducts))
            {

                OrderViewModel orderViewModel = new OrderViewModel()
                {
                    OrderId = order.OrderId,
                    Customer = order.Customer,
                    CustomerId = order.CustomerId,
                    Total = order.Total,
                    timeDate = order.timeDate

                };

        //Får inte detta att funka       
                orderViewModel.OrderProducts = new List<OrderProductViewModel>();
                 foreach (OrderProduct orderproduct in order.OrderProducts)
                 {
                     OrderProductViewModel orderProductViewModel = new OrderProductViewModel()
                     {
                         ProductId = orderproduct.ProductId,
                         ProductName = orderproduct.ProductName,
                         Price = orderproduct.Price,
                         Quantity = orderproduct.Quantity
                     };
                     orderViewModel.OrderProducts.Add(orderProductViewModel); //Fel här oxå
                 }
                 orderViewModelList.Add(orderViewModel);

        //Den här funkar ej heller
                /*
                OrderProduct orderProduct = order.OrderProduct;
                orderViewModel.OrderProduct = new OrderProductViewModel()
                {
                    ProductId = orderproduct.ProductId,
                    ProductName = orderproduct.ProductName,
                    Price = orderproduct.Price,
                    Quantity = orderproduct.Quantity
                };
                orderViewModelsList.Add(orderProductViewModel);
                */
            }

            return Json(orderViewModelList);

        }


        // POST: api/orders
        [HttpPost]
        public async Task<ActionResult<IEnumerable<Order>>> Index(CreateOrderViewModel createOrderViewModel)
        {
            if (createOrderViewModel == null)
            {
                return BadRequest();
            }
            Order order = new Order()
            {
                Customer = createOrderViewModel.Customer,
                CustomerId = createOrderViewModel.CustomerId,
                OrderProducts = (ICollection<OrderProduct>)createOrderViewModel.OrderProducts,
                Total = createOrderViewModel.Total,
                timeDate = createOrderViewModel.timeDate
            };
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return Created($"api/orders/{order.OrderId}", order);
        }

        // PUT: api/product/{id}
        [HttpPut("{id:int}")]
        public async Task<ActionResult<IEnumerable<Order>>> Index(CreateOrderViewModel createOrderViewModel, int id)
        {
            if (createOrderViewModel == null)
            {
                return BadRequest();
            }

            Order order = await _context.Orders.FindAsync(id);
            if (order == null)
            {
                return NotFound();
            }

            order.Customer = createOrderViewModel.Customer;
            order.CustomerId = createOrderViewModel.CustomerId;
            order.OrderProducts = (ICollection<OrderProduct>)createOrderViewModel.OrderProducts;
            order.Total = createOrderViewModel.Total;
            order.timeDate = createOrderViewModel.timeDate;
            _context.Orders.Update(order);
            await _context.SaveChangesAsync();

            return Created($"api/orders/{order.OrderId}", order);
        }

        // DELETE: api/orders/{id}
        [HttpDelete("{id:int}")]
        public async Task<ActionResult<IEnumerable<Order>>> Index(int id)
        {Order order = await _context.Orders.FindAsync(id);
            if (order == null)
            {
                return NotFound();
            }
            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();

            return Ok();
        }



    }
}
