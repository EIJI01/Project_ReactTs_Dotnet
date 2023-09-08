using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Auth_api.Models
{
    public class Users
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Telephone { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
    }
}