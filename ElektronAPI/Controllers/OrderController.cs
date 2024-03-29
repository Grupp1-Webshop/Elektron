﻿using ElektronAPI.Data;
using ElektronAPI.Models.Categories;
using ElektronAPI.Models.Login;
using ElektronAPI.Models.OrderProducts;
using ElektronAPI.Models.Orders;
using ElektronAPI.Models.Products;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
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

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> Index()
        {

            if (_context.Orders == null)
            {
                return NotFound();
            }


            List<OrderViewModel> orderViewModelList = new List<OrderViewModel>();
            foreach (Order order in _context.Orders.Include(e => e.OrderProducts).Include(e => e.Customer))
            {

                OrderViewModel orderViewModel = new OrderViewModel()
                {
                    OrderId = order.OrderId,
                    CustomerId = order.CustomerId,
                    Total = order.Total,
                    timeDate = order.timeDate

                };
                orderViewModel.Customer = new UserViewModel()
                {
                    Name = order.Customer.UserName,
                    Email = order.Customer.Email,
                };
                orderViewModel.OrderProducts = new List<OrderProductViewModel>();
                foreach (OrderProduct orderproduct in order.OrderProducts)
                {
                     OrderProductViewModel orderProductViewModel = new OrderProductViewModel()
                     {
                         OrderProductId = orderproduct.ProductId,
                         ProductId = orderproduct.ProductId,
                         ProductName = orderproduct.ProductName,
                         OrderId = orderproduct.OrderId,
                         Price = orderproduct.Price,
                         Quantity = orderproduct.Quantity
                     };
                     orderViewModel.OrderProducts.Add(orderProductViewModel); 
                }
                orderViewModelList.Add(orderViewModel);

            }

            return Json(orderViewModelList);

        }
        // POST: api/orders
        [Authorize]
        [HttpPost]
        public async Task<ActionResult<IEnumerable<Order>>> Index(CreateOrderViewModel createOrderViewModel)
        {
            if (createOrderViewModel == null)
            {
                return BadRequest();
            }
            Order order = new Order()
            {
                CustomerId = createOrderViewModel.CustomerId,
                Total = createOrderViewModel.Total,
                timeDate = DateTime.Now
            };
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return Created($"api/orders/{order.OrderId}", order);
        }

        [Authorize(Roles = "Admin")]
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

            order.CustomerId = createOrderViewModel.CustomerId;
            order.Total = createOrderViewModel.Total;
            _context.Orders.Update(order);
            await _context.SaveChangesAsync();

            return Created($"api/orders/{order.OrderId}", order);
        }

        [Authorize(Roles = "Admin")]
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
