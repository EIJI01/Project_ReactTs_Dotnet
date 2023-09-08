using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Auth_api.Data;
using Auth_api.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Auth_api.Models;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;

namespace Auth_api.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public readonly ApplicationDbContext _context;

        public AuthController(IConfiguration configuration, ApplicationDbContext context)
        {
            _configuration = configuration;
            _context = context;
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterRequest req)
        {
            var oldUser = _context.Users.SingleOrDefault(u => u.Username == req.Username);

            if (oldUser is not null)
            {
                return BadRequest(new
                {
                    Error = $"User {req.Username} is existed."
                });
            }

            string passwordHash = BCrypt.Net.BCrypt.HashPassword(req.Password);
            var user = new Users
            {
                Username = req.Username,
                Telephone = req.Telephone,
                PasswordHash = passwordHash
            };

            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok(new { User = user });
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest req)
        {

            var existingUser = _context.Users.SingleOrDefault(u => u.Username == req.Username);

            if (existingUser is null)
            {
                return BadRequest(new
                {
                    Error = "Username is not existed."
                });
            }

            if (!BCrypt.Net.BCrypt.Verify(req.Password, existingUser.PasswordHash))
            {

                return BadRequest(new
                {
                    Error = "Invalid password"
                });
            }

            string token = CreateToken(existingUser);

            return Ok(new
            {
                Token = token
            });
        }

        private string CreateToken(Users user)
        {
            List<Claim> claims = new List<Claim>{
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Role, "User"),
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value!));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds
            );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

    }
}