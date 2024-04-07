import { Component } from '@angular/core';
import { DishComponent } from './dish.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DishComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'food-processor';
}