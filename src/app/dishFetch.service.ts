import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface Meal {
  meals: [{
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strYoutube: string;
  }];
}

@Injectable({ providedIn: 'root' })
export class DishFetch {
  private apiBaseUrl = 'https://www.themealdb.com/api/json/v1/1';

  fetchRandomMeal(): Observable<Meal> {
    return from(axios.get<Meal>(`${this.apiBaseUrl}/random.php`))
              .pipe(
                map(response => response.data),
                catchError(error => {
                  // Handle potential API errors here 
                  console.error('Error fetching meal data:', error);
                  throw new Error('Could not fetch meal data.');
                })
              );
  }
}
