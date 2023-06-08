using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace StudentApplication.Model
{
    public class DbContextClass :DbContext
    {

        //protected readonly IConfiguration Configuration;

        //public DbContextClass(IConfiguration configuration)
        //{
        //    Configuration = configuration;
        //}
        //protected override void OnConfiguring(DbContextOptionsBuilder options)
        //{
        //    options.UseSqlServer(Configuration.GetConnectionString("DefaultSQLConnection"));
        //}

        public DbSet<Student> students { get; set; }
    }
}

