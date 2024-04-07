import { Injectable } from "@angular/core";
import axios from "axios";
import { Observable, from } from "rxjs";
import { map } from 'rxjs/operators';
export interface MealDBCategory {
    strCategory: string;
    strCategoryThumb: string;
}
  
@Injectable({ providedIn: 'root' })
  export class MealDBService {
  
    private apiBaseUrl = 'https://www.themealdb.com/api/json/v1/1';
  
    fetchCategories(): Observable<MealDBCategory[]> {
      return from(axios.get< {categories: MealDBCategory[] }>(`${this.apiBaseUrl}/categories.php`))
                .pipe(
                  map(response => response.data.categories) 
                );
    }
}