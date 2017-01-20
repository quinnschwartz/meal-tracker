import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div>
      <div *ngIf="childSelectedMeal">
        <h3>{{childSelectedMeal.type}}</h3>
        <h3>Edit Meal</h3>
        <label>Type (breakfast, lunch or dinner):</label>
        <input [(ngModel)]="childSelectedMeal.type">
        <label>Dish (burrito, or sushi etc.):</label>
        <input [(ngModel)]="childSelectedMeal.food">
        <label>Calories:</label>
        <input [(ngModel)]="childSelectedMeal.calories">
        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
