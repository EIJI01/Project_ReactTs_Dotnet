using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Auth_api.Models;
using Microsoft.EntityFrameworkCore;

namespace Auth_api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Users> Users { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
    }
}