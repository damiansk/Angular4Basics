import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Simple Recipe', 'This is a simple recipe', 'https://www.bbcgoodfood.com/sites/default/files/styles/carousel_medium/public/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg?itok=naGPMoRQ'),
    new Recipe('Pierogi', 'This is a simple recipe for pierogi', 'http://www.zajadam.pl/wp-content/uploads/2015/01/pierogi-z-kasza-2-891x500.jpg'),
    new Recipe('Pizza', 'Simple as...', 'http://www.zajadam.pl/wp-content/uploads/2015/02/pizza-pepperoni-9-469x313.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
