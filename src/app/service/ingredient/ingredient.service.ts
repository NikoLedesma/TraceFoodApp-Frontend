import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Ingredient } from '../../entity/Ingredient';


import{ of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError,map,tap} from  'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class IngredientService {


  //private ingredientUrl='http://localhost:8080/ingredient/all';
  private ingredientUrl=environment.ingredientServiceUrl;

  constructor(private http:HttpClient) { }

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.ingredientUrl);
  }

}
