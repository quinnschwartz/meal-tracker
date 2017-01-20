import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <ul>
   <li *ngFor="let currentMeal of childMealList">{{currentMeal.type}}: {{currentMeal.food}} ({{currentMeal.calories}} calories)</li>
 </ul>
`

})

export class MealListComponent {
  @Input() childMealList: Meal[];

}
