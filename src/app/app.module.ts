import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MealsDayComponent } from './component/meals-day/meals-day.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IngredientComponent } from './component/ingredient/ingredient.component';
import { IngredientService } from './service/ingredient/ingredient.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MealsDayComponent,
    IngredientComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
