import { Component } from '@angular/core';
import { DishFetch, Meal } from './dishFetch.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
  @if (meal) {
    <div class="random-meal-container">
      <h1>Find Your Next Meal</h1>
      <h2>{{ meal.meals[0].strMeal }}</h2>
      <img [src]="meal.meals[0].strMealThumb" alt="Image of meal">
      <a [href]="meal.meals[0].strYoutube"><p>Here is the recipe<p></a>
    </div>
    }
    @else {
    <div class="loading-error-message">
      <h1>Find Your Next Meal</h1>
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