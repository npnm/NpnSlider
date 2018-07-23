import { Component, Input, Output, EventEmitter, ElementRef, OnInit, HostListener, SecurityContext, Host } from '@angular/core';

@Component({
  selector: 'npn-slider',
  templateUrl: './npn-slider.component.html',
  styleUrls: ['./npn-slider.component.css']
})
export class NpnSliderComponent implements OnInit {
  private sliderModel = [0, 0, 0];
  private sliderWidth = 0;
  private totalDiff = 0;
  private startClientX: number = 0;
  private startPleft = 0;
  private startPRight = 0;

  public initValues: number[] = [0, 0];
  public currentValues: number[] = [0, 0];
  public handlerX: number[] = [0, 0];
  public isHandlerActive = false;
  public isTouchEventStart = false;
  public isMouseEventStart = false;
  public currentHandlerIndex = 0;
  public stepIndicatorPositions = [];

  constructor(private el: ElementRef) {
  }

  @Input('minMaxValues')
  set setInitValues(value: number[]) {
    if (value.length == 2) {
      this.initValues = value;
    }
  }

  @Output() onSliderValueChange = new EventEmitter<number[]>();

  @Input('selectedRangeValues')
  set setSelectedValues(value: number[]) {
    if (value.length == 2) {
      this.currentValues = value;
    }
  }

  @Input('step') step: number = 1;

  @Input() showStepIndicator: boolean = false;

  ngOnInit() {
    this.resetSlider();
  }

  /*Method to reset entire Slider*/
  public resetSlider() {
    try {
      // Taking width of slider bar element.
      this.sliderWidth = this.el.nativeElement.children[0].children[0].offsetWidth;
      this.initializeModel();
    } catch (e) {
      console.error(e);
    }
  }

  /*Method to set current selected values */
  private updateCurrentValue(arrayValue: number[]) {
    this.currentValues[0] = arrayValue[0];
    this.currentValues[1] = arrayValue[1];
    this.onSliderValueChange.emit(this.currentValues);
  }

  /*Method to initialize variables and model values for first time  */
  private initializeModel() {
    if (this.initValues[0] > this.initValues[1]) {
      // Validation for initValues: MinMaxValues
      this.initValues = [0, 0];
      this.updateCurrentValue([0, 0]);
    } else if (this.currentValues[0] < this.initValues[0] || this.currentValues[1] > this.initValues[1]) {
      // Validation for currentValues: SelectedRangeValues
      this.updateCurrentValue(this.initValues);
    }
    // Setting the model values
    this.sliderModel = [
      this.currentValues[0] - this.initValues[0],
      this.currentValues[1] - this.currentValues[0],
      this.initValues[1] - this.currentValues[1]
    ];
    this.totalDiff = this.sliderModel.reduce((prevValue, curValue) => prevValue + curValue, 0);
    if (this.totalDiff % this.step != 0) {
      // Validation for slider step
      console.warn('Ignored given step value "' + this.step + '" : and taken "1" as default step');
      this.step = 1;
    }
    this.initializeStepIndicator();
    this.setHandlerPosition();
  }

  private initializeStepIndicator() {
    if (this.showStepIndicator) {
      if (this.stepIndicatorPositions.length == 0) {
        let numOfStepIndicators = this.totalDiff / this.step;
        let increment = this.sliderWidth / numOfStepIndicators;
        let leftPosition = increment;
        while (this.stepIndicatorPositions.length < numOfStepIndicators - 1) {
          this.stepIndicatorPositions.push(+leftPosition.toFixed(2));
          leftPosition += increment;
        }
      }
    }
  }

  /*Method to set handler position */
  private setHandlerPosition() {
    let runningTotal = 0;
    //console.log('model value on move: ' + this.sliderModel);
    // Updating selected values : current values
    this.updateCurrentValue([
      this.initValues[0] + this.sliderModel[0],
      this.initValues[1] - this.sliderModel[2]
    ]);
    //console.log(this.sliderModel);
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
