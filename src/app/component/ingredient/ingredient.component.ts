import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../service/ingredient/ingredient.service';
import { Ingredient } from '../../entity/Ingredient';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {


  columns: string[];
  ingredients : Ingredient[];

  constructor(private ingredientService:IngredientService) { }

  ngOnInit() {
    this.columns = ["id", "name", "weight"];
    this.getIngredients();
  }

  getIngredients():void{
    this.ingredientService.getIngredients().subscribe(ingredients=>this.ingredients = ingredients);
  }

}
