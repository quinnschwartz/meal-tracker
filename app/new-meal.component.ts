import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h3>New Meal</h3>
  <div>
    <label>Type (breakfast, lunch or dinner):</label>
    <input #newType>
    <label>Dish (burrito, or sushi etc.):</label>
    <input #newDish>
    <label>Calories:</label>
    <input #newCalories type="number">
    <button (click)="submitForm(newType.value, newDish.value, newCalories.value)">Add</button>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(type: string, dish: string, calories: number) {
    var newMealToAdd: Meal = new Meal(type, dish, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
