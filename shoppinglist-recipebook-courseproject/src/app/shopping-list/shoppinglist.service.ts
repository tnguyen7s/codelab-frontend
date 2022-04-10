import { EventEmitter, Injectable, Output } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
  providedIn: "root"
})
export class ShoppingListService{
  private ingredients:Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  @Output() onIngredientsChanged = new EventEmitter();

  getIngredients()
  {
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient)
  {
    this.ingredients.push(ingredient);
    this.onIngredientsChanged.emit();
  }
  addIngredients(ingredients:Ingredient[])
  {
    ingredients.forEach(i => this.ingredients.push(i));
    this.onIngredientsChanged.emit();
  }
}
