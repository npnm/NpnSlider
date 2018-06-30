import { Component, Input, Output, EventEmitter, ElementRef, OnInit, HostListener, SecurityContext } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'npn-slider',
  templateUrl: './npn-slider.component.html',
  styleUrls: ['./npn-slider.component.css']
})
export class NpnSliderComponent implements OnInit {
  private sliderModel = [0, 0, 0];
  private initValues: number[] = [0, 0];
  private currentValues: number[] = [0, 0];
  private handlerX: number[] = [0, 0];
  private sliderWidth = 0;
  private sliderHandlerWidth = 0;
  private totalDiff = 0;
  private startClientX: number = 0;
  private isMouseDown = false;
  private currentHandlerIndex = 0;
  private startPleft = 0;
  private startPRight = 0;

  constructor(private el: ElementRef, private _sanitizer: DomSanitizer) {
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

  ngOnInit() {
    this.resetSlider();
  }

  /*Method to reset entire Slider*/
  public resetSlider() {
    try {
      // Taking width of slider bar element.
      this.sliderWidth = this.el.nativeElement.children[0].children[0].offsetWidth;
      this.sliderHandlerWidth = this.el.nativeElement.children[0].children[0].children[0].offsetWidth;
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
    this.setHandlerPosition();
  }

  /*Method to set handler position */
  private setHandlerPosition() {
    let runningTotal = 0;
    console.log('model value on move: ' + this.sliderModel);
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

  /*Method to disable handler movement on mouse up*/
  @HostListener('document:mouseup') mouseUpSlider() {
    this.isMouseDown = false;
  }

  /*Method to detect mouse down event on handler*/
  private mouseDownSlider(event: MouseEvent, handlerIndex: number) {
    event.preventDefault();
    this.startClientX = event.clientX;
    this.currentHandlerIndex = handlerIndex;
    this.startPleft = this.sliderModel[handlerIndex];
    this.startPRight = this.sliderModel[handlerIndex + 1];
    this.isMouseDown = true;
  }

  /*Method to calculate silder handler movement */
  private mouseSliding(event: MouseEvent) {
    if (this.isMouseDown) {
      let movedX = Math.round((event.clientX - this.startClientX) / this.sliderWidth * this.totalDiff);
      let nextPLeft = this.startPleft + movedX;
      let nextPRight = this.startPRight - movedX;
      if (nextPLeft >= 0 && nextPRight >= 0) {
        this.setModelValue(this.currentHandlerIndex, nextPLeft);
        this.setModelValue(this.currentHandlerIndex + 1, nextPRight);
        this.setHandlerPosition();
      }
    }
  }

  private getFillerWidth() {
    return this._sanitizer.sanitize(SecurityContext.STYLE,
      "calc(" + (this.handlerX[1] - this.handlerX[0]) + "% - -" + (this.sliderHandlerWidth / 2) + "px)");
  }

}
