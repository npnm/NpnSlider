import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentValues = [0, 0];
  currentValues2 = [2000, 3500];

  onSliderChange1(selectedValues: number[]) {
    this.currentValues = selectedValues;
  }

  onSliderChange2(selectedValues: number[]) {
    this.currentValues2 = selectedValues;
  }
}
