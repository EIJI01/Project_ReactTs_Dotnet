using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Auth_api.Dto
{
    public class RegisterRequest
    {
        public required string Username { get; set; } = string.Empty;
        public required string Telephone { get; set; } = string.Empty;
        public required string Password { get; set; } = string.Empty;
    }
}