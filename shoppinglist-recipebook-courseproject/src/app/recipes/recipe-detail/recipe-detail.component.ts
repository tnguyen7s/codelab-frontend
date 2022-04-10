import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shoppinglist.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private shoppingListService:ShoppingListService, private route: ActivatedRoute, private recipeService:RecipeService, private router: Router) {
   }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>
    {
      this.id = +params["id"];
      this.recipe = this.recipeService.getRecipes()[this.id];
    });
  }

  onAddIngredientsToShoppingList()
  {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
  OnEditRecipe(){
    this.router.navigate(["edit"], {"relativeTo": this.route});
  }
}
