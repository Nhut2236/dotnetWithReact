using Microsoft.EntityFrameworkCore;

namespace HooksLearning.Models
{
    public class Context : DbContext
    {
        public Context() { }
        public Context(DbContextOptions<Context> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           
        }
    }
}
