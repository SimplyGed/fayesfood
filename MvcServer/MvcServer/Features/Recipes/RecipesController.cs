using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MvcServer.Features.Recipes
{
    [Produces("application/json")]
    [Route("api/Recipes")]
    public class RecipesController : Controller
    {
        private readonly RecipesContext _context;

        public RecipesController(RecipesContext context)
        {
            _context = context;
        }

        // GET: api/Recipes
        [HttpGet]
        public IEnumerable<Recipe> GetRecipe()
        {
            return _context.Recipes;
        }

        // GET: api/Recipes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRecipe([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var recipe = await _context.Recipes.SingleOrDefaultAsync(m => m.Id == id);

            if (recipe == null)
            {
                return NotFound();
            }

            return Ok(recipe);
        }

        // PUT: api/Recipes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecipe([FromRoute] Guid id, [FromBody] Recipe recipe)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != recipe.Id)
            {
                return BadRequest();
            }

            _context.Entry(recipe).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecipeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Recipes
        [HttpPost]
        public async Task<IActionResult> PostRecipe([FromBody] Recipe recipe)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Recipes.Add(recipe);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRecipe", new { id = recipe.Id }, recipe);
        }

        // DELETE: api/Recipes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecipe([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var recipe = await _context.Recipes.SingleOrDefaultAsync(m => m.Id == id);
            if (recipe == null)
            {
                return NotFound();
            }

            _context.Recipes.Remove(recipe);
            await _context.SaveChangesAsync();

            return Ok(recipe);
        }

        private bool RecipeExists(Guid id)
        {
            return _context.Recipes.Any(e => e.Id == id);
        }
    }
}