import { Component } from '@angular/core';
import { DishFetch, Meal } from './dishFetch.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
  <h1>find your next meal</h1>
  @if (meal) {
    <div>
      <h2>{{ meal.meals[0].strMeal }}</h2>
      <img [src]="meal.meals[0].strMealThumb" alt="Image of meal">
      <a [href]="meal.meals[0].strYoutube"><p>Here is the recipe<p></a>
    </div>
    }
    @else {
    <div>
      <p>Loading...</p>
      <p>Error: {{ error }}</p> 
    </div> 
    }`,
  styleUrl: './app.component.css'
})
export class AppComponent{
  meal: Meal | null = null;
  isLoading = false;
  error = '';

  constructor(private mealDBService: DishFetch) {}

  ngOnInit() {
    this.isLoading = true;
    this.mealDBService.fetchRandomMeal().subscribe(
      meal => {
        this.meal = meal;
        this.isLoading = false;
      },
      error => {
        this.error = error.message; // Extract error message
        this.isLoading = false;
      }
    );
  }
}