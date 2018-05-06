import { Component, OnInit } from '@angular/core';
import { MealsDay } from '../../entity/MealsDay';
import { Meal } from '../../entity/Meal';

@Component({
  selector: 'app-meals-day',
  templateUrl: './meals-day.component.html',
  styleUrls: ['./meals-day.component.css']
})
export class MealsDayComponent implements OnInit {
   
  constructor() { }

//mealsDay:MealsDay;
  mealsDay:MealsDay = {
    date: new Date(),
    description:'Hello world!! meals day....!!',
    meals: [{name:'meal 1'},{name:'meal 2'},{name:'meal 3'}]
  };


  submitted = false;
  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
  }

  get diagnostic(){
    return JSON.stringify(this.mealsDay);
  }

  newMealsDay(){
    this.mealsDay = new MealsDay();
  }


}
