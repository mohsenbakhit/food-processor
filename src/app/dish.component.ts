import { Component, OnInit, NgZone } from "@angular/core";
import { DishSelectorService, Dish } from "./dishApi.service";
@Component({
    selector:'dish',
    standalone: true,
    imports: [],
    template: `
    
    @if (meal) {
    <div>
      <h2>{{ meal.strMeal }}</h2>
      <img [src]="meal.strMealThumb" alt="Image of meal">
    </div>
    }
    @else {
    <div>
      <p>Loading...</p>
      <p>Error: {{ error }}</p> 
    </div> 
    }
  `
})

export class DishComponent implements OnInit{
    meal: Dish | null = null;
    isLoading = false;
    error = '';
  
    constructor(private dish: DishSelectorService, private ngZone: NgZone) {}
  
    ngOnInit() {
      this.isLoading = true;
      this.dish.fetchDish().subscribe(
        meal => {
            this.ngZone.run(() => { 
              this.meal = meal;
              this.isLoading = false;
              console.log(this.meal);
            });
          },
        error => {
          this.error = error.message;
          this.isLoading = false;
        }
      );
    }
}