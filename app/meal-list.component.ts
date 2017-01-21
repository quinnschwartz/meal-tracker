import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allMeals">All Meals</option>
    <option value="healthyMeals" selected="selected">Healthy Meals</option>
    <option value="unhealthyMeals">Unhealthy Meals</option>
  </select>

  <ul>
   <li *ngFor="let currentMeal of childMealList">{{currentMeal.type}}: {{currentMeal.dish}} ({{currentMeal.calories}} calories)<button (click)="editButtonHasBeenClicked(currentMeal)">Edit!</button></li>
 </ul>
`

})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  filterByCalories: string = "unhealthyMeals";

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }


  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
