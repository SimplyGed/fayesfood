using System;
using System.ComponentModel.DataAnnotations;

namespace MvcServer.Features.Recipes
{
    public class Recipe
    {
        [Required]
        public Guid Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Author { get; set; }
        [Required]
        public string Source { get; set; }
        [Required]
        public int Page { get; set; }
        public string Link { get; set; }
    }
}
