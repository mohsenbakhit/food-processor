import { Component, OnInit } from "@angular/core"
import { MealDBService, MealDBCategory } from "./categoryApi.service";

@Component({
    selector: 'app-categories',
    standalone: true,
    imports: [],
    template: `
    @if (categories) {
    <ul>
      @for (category of categories; track category) {
        <a href="">
            <li>
            {{ category.strCategory }}
            <img src={{category.strCategoryThumb}}/>
            </li>
        </a>
      }
      </ul>
    }
    `
  })
  export class CategoriesComponent implements OnInit {
    categories: MealDBCategory[] = [];
  
    constructor(private mealDBService: MealDBService) {}
  
    ngOnInit() {
      this.mealDBService.fetchCategories().subscribe(categories => {
        this.categories = categories;
      });
    }
  }