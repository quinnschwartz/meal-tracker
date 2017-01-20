import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meals Eaten On {{month}}/{{day}}/{{year}}</h1>
    <meal-list [childMealList]="masterMealList"></meal-list>
    <hr>
    </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedMeal = null;

masterMealList: Meal[] = [
  new Meal('Breakfast','Omelete', 400),
  new Meal('Lunch','Sandwich', 500),
  new Meal('Dinner','Pasta', 600),
];
}
