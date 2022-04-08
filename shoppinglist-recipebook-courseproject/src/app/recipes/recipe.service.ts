import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
  private recipes: Recipe[]=
  [
    new Recipe('A Test Recipe', 'This is a simply text', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505')
  ];

  recipeSelected = new EventEmitter<Recipe>();
  getRecipes()
  {
    return this.recipes.slice(); //return the copy
  }

}
