import { Component, Input } from '@angular/core';
import { Recipe } from '../food/food.model';

@Component({
  selector: 'ff-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  @Input() recipes: Recipe[];
  @Input() searchText: string;

}
