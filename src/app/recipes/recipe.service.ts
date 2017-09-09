import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe(
			'Simple Recipe',
			'This is a simple recipe',
			'https://www.bbcgoodfood.com/sites/default/files/styles/carousel_medium/public/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg?itok=naGPMoRQ',
			[
				new Ingredient('Potato', 2),
				new Ingredient('Chicken', 1)
			]),
		new Recipe(
			'Pierogi',
			'This is a simple recipe for pierogi',
			'http://www.zajadam.pl/wp-content/uploads/2015/01/pierogi-z-kasza-2-891x500.jpg',
			[
				new Ingredient('Cus', 3),
				new Ingredient('Cus innego', 10)
			]),
		new Recipe(
			'Pizza',
			'Simple as...',
			'http://www.zajadam.pl/wp-content/uploads/2015/02/pizza-pepperoni-9-469x313.jpg',
			[
				new Ingredient('Tomato', 5),
				new Ingredient('Fries', 12)
			]
		)
	];


	constructor(private shoppingListService: ShoppingListService) {}

	getRecipes() {
		return this.recipes.slice();
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.shoppingListService
			.addIngredients(ingredients);
	}

}
