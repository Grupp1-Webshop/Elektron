using System.Collections.Generic;

namespace ElektronAPI.Models.User
{
    public class UserViewModel
    {
        public string UserId { get; set; }
        public string UserName { get; set; }

        public List<string>? UserRole { get; set; }

    }
}
