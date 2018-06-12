using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MvcServer.Features.Recipes
{
    public class RecipesContext : DbContext
    {
        public RecipesContext (DbContextOptions<RecipesContext> options)
            : base(options)
        {
        }

        public DbSet<MvcServer.Features.Recipes.Recipe> Recipes { get; set; }
    }
}
