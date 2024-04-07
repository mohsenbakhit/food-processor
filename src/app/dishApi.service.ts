import { Injectable } from "@angular/core";
import axios from "axios";
import { Observable, from } from "rxjs";
import { map } from 'rxjs/operators';

export interface Dish {
    idMeal: string,
    strMeal: string,
    strArea: string,
    strMealThumb: string
}

@Injectable({ providedIn: 'root' })
  export class DishSelectorService {
  
    private apiBaseUrl = ' www.themealdb.com/api/json/v1/1';
  
    fetchDish(): Observable<Dish> {
        return from(axios.get<{meals: Dish}>(`${this.apiBaseUrl}/random.php`))
        .pipe(
          map(response => response.data.meals)
        );
    }
}