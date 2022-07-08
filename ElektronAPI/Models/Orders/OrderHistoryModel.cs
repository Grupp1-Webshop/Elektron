using ElektronAPI.Models.Login;
using System.Collections.Generic;

namespace ElektronAPI.Models.Orders
{
    public class OrderHistoryModel
    {
        public List<OrderViewModel> historyOrders { get; set; }
    }
}
