import { Component, Input, Output, EventEmitter, ElementRef, OnInit, HostListener, SimpleChange, ChangeDetectionStrategy } from '@angular/core';
import { Utilities } from './utilities';

@Component({
  selector: 'npn-slider',
  templateUrl: './npn-slider.component.html',
  styleUrls: ['./npn-slider.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpnSliderComponent extends Utilities implements OnInit {
  private sliderModel = [0, 0, 0];
  private step:number = 1;
  private sliderWidth = 0;
  private totalDiff = 0;
  private startClientX: number = 0;
  private startPleft = 0;
  private startPRight = 0;
  private selectedMinMaxValues: number[] = [];
  private sliderInitiated: boolean = false;

  public initValues: number[] = [];
  public currentValues: number[] = [];
  public handlerX: number[] = [0, 0];
  public isHandlerActive = false;
  public isTouchEventStart = false;
  public isMouseEventStart = false;
  public currentHandlerIndex = 0;
  public stepIndicatorPositions = [];

  constructor(private el: ElementRef) {
    super();
  }

  @Input('min')
  set setMinValues(value: number) {
    if (!isNaN(value)) {
      value = Number(value);
      if (!this.isNullOrEmpty(this.initValues[1]) && this.initValues[1] < value) {
        return;
      }
      this.initValues[0] = value;
    }
  }

  @Input('max')
  set setMaxValues(value: number) {
    if (!isNaN(value)) {
      value = Number(value);
      if (!this.isNullOrEmpty(this.initValues[0]) && this.initValues[0] > value) {
        return;
      }
      this.initValues[1] = value;
    }
  }

  @Input('minSelected')
  set setMinSelectedValues(value: number) {
    if (!isNaN(value) && this.isNullOrEmpty(this.selectedMinMaxValues[0])) {
      this.selectedMinMaxValues[0] = Number(value);
    }
  }

  @Input('maxSelected')
  set setMaxSelectedValues(value: number) {
    if (!isNaN(value) && this.isNullOrEmpty(this.selectedMinMaxValues[1])) {
      this.selectedMinMaxValues[1] = Number(value);
    }
  }
  @Input('step')
  set stepValue(value: number){
    if(!isNaN(value)){
      this.step = Number(value);
    }
  }

  @Input() showStepIndicator: boolean = false;

  @Output() onSliderValueChange = new EventEmitter<number[]>();

  ngOnInit() {
    this.initializeSlider();
  }

  ngOnChanges(changes: SimpleChange) {
    if (!changes['setMinSelectedValues'] && !changes['setMaxSelectedValues'] && this.sliderInitiated) {
      this.resetModel();
    }
  }

  /*Method to initailize entire Slider*/
  public initializeSlider() {
    try {
      // Taking width of slider bar element.
      this.sliderWidth = this.el.nativeElement.children[0].children[0].offsetWidth;

      if (this.isNumberArray(this.selectedMinMaxValues) && this.selectedMinMaxValues.length === 2) {
        this.currentValues = this.selectedMinMaxValues.slice();
      }

      if (!this.isNumberArray(this.initValues) || this.initValues[0] > this.initValues[1] || this.initValues.length < 2) {
        // Validation for initValues: MinMaxValues
        this.initValues = [0, 0];
        this.updateCurrentValue([0, 0]);
      }
      if (this.currentValues.length < 2) {
        this.updateCurrentValue(this.initValues);
      }

      this.resetModel();
      this.sliderInitiated = true;
    } catch (e) {
      console.error(e);
    }
  }

  private resetModelValues() {
    if (!this.isNumberArray(this.initValues) || this.initValues[0] > this.initValues[1]) {
      return;
    }
    this.resetModel();
  }

  /*Method to initialize variables and model values for first time  */
  private resetModel() {
    // Validation for currentValues
    if (this.currentValues[0] < this.initValues[0] || this.currentValues[1] > this.initValues[1]) {
      this.updateCurrentValue(this.initValues);
    }
    // Setting the model values
    this.sliderModel = [
      this.currentValues[0] - this.initValues[0],
      this.currentValues[1] - this.currentValues[0],
      this.initValues[1] - this.currentValues[1]
    ];

    this.totalDiff = this.sliderModel.reduce((prevValue, curValue) => prevValue + curValue, 0);

    // Validation for slider step
    if (this.totalDiff % this.step != 0) {
      let newStep = this.findNextValidStepValue(this.totalDiff, this.step);
      console.warn('Invalid step value "' + this.step + '" : and took "' + newStep + '" as default step');
      this.step = newStep;
    }
    if(this.sliderWidth / (this.totalDiff / this.step) < 10){
      console.error(`'step' value is too small compared to min & max value difference and slider width.
        Slider might not work properly!. Provide slight large value for 'step'`);
    }
    this.initializeStepIndicator();
    this.setHandlerPosition();
  }

  private initializeStepIndicator() {
    if (this.showStepIndicator) {
      this.stepIndicatorPositions = [];
      let numOfStepIndicators = this.totalDiff / this.step;
      if (this.sliderWidth / numOfStepIndicators >= 10) {
        let increment = this.sliderWidth / numOfStepIndicators;
        let leftPosition = increment;
        while (this.stepIndicatorPositions.length < numOfStepIndicators - 1) {
          this.stepIndicatorPositions.push(+leftPosition.toFixed(2));
          leftPosition += increment;
        }
      }
    }
  }

  /*Method to set current selected values */
  private updateCurrentValue(arrayValue: number[]) {
    this.currentValues[0] = arrayValue[0];
    this.currentValues[1] = arrayValue[1];
    this.onSliderValueChange.emit(this.currentValues);
  }

  /*Method to set handler position */
  private setHandlerPosition() {
    let runningTotal = 0;
    // Updating selected values : current values
    this.updateCurrentValue([
      this.initValues[0] + this.sliderModel[0],
      this.initValues[1] - this.sliderModel[2]
    ]);
    /*Setting handler position */
    for (let i = 0, len = this.sliderModel.length - 1; i < len; i++) {
      runningTotal += this.sliderModel[i];
      this.handlerX[i] = (runningTotal / this.totalDiff) * 100;
    }
  }

  /*Method to set model array values - will try to refine the values using step */
  private setModelValue(index: number, value: number) {
    if (this.step > 1) {
      value = Math.round(value / this.step) * this.step;
    }
    this.sliderModel[index] = value;
  }

  /*Method to disable handler movement*/
  /*Execute on events:
  * on-mouseup
  * on-panend
  */
  @HostListener('document:mouseup')
  @HostListener('document:panend')
  setHandlerActiveOff() {
    //debugger;
    this.isMouseEventStart = false;
    this.isTouchEventStart = false;
    this.isHandlerActive = false;
  }

  /*Method to detect start draging handler*/
  /*Execute on events:
  * on-mousedown
  * on-panstart
  */
  public setHandlerActive(event: any, handlerIndex: number) {
    event.preventDefault();
    if (event.clientX) {
      this.startClientX = event.clientX;
      this.isMouseEventStart = true;
      this.isTouchEventStart = false;
    } else if (event.deltaX) {
      this.startClientX = event.deltaX;
      this.isTouchEventStart = true;
      this.isMouseEventStart = false;
    }
    if (this.isMouseEventStart || this.isTouchEventStart) {
      this.currentHandlerIndex = handlerIndex;
      this.startPleft = this.sliderModel[handlerIndex];
      this.startPRight = this.sliderModel[handlerIndex + 1];
      this.isHandlerActive = true;
    }
  }


  /*Method to calculate silder handler movement */
  /*Execute on events:
  * on-mousemove
  * on-panmove
  */
  public handlerSliding(event: any) {
    if ((this.isMouseEventStart && event.clientX) || (this.isTouchEventStart && event.deltaX)) {
      let movedX = Math.round(((event.clientX || event.deltaX) - this.startClientX) / this.sliderWidth * this.totalDiff);
      let nextPLeft = this.startPleft + movedX;
      let nextPRight = this.startPRight - movedX;
      if (nextPLeft >= 0 && nextPRight >= 0) {
        this.setModelValue(this.currentHandlerIndex, nextPLeft);
        this.setModelValue(this.currentHandlerIndex + 1, nextPRight);
        this.setHandlerPosition();
      }
    }
  }
}
