import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import 'hammerjs';
import { NpnSliderComponent } from './npn-slider.component';
import { DebugElement, SimpleChange } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NpnSliderComponent', () => {
  let npnSlider: NpnSliderComponent;
  let fixture: ComponentFixture<NpnSliderComponent>;
  let sliderElem: DebugElement;
  let leftHandlerElem: DebugElement;
  let rightHandlerElem: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NpnSliderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpnSliderComponent);
    npnSlider = fixture.componentInstance;

    npnSlider.setMinValues = 2000;
    npnSlider.setMaxValues = 5000;
    npnSlider.stepValue = 500;

    sliderElem = fixture.debugElement;
    leftHandlerElem = sliderElem.query(By.css('.left-handle'));
    rightHandlerElem = sliderElem.query(By.css('.right-handle'));
  });

  it('should create "npnSlider" with two slider handlers at correct position', () => {
    fixture.detectChanges();
    expect(npnSlider).toBeTruthy();
    expect(leftHandlerElem.styles.left).toBe('0%', "Left handler should be at left most side of slider");
    expect(rightHandlerElem.styles.left).toBe('100%', "Right handler should be at right most side of slider");
  });

  it('slider should display step indicator', () => {
    npnSlider.showStepIndicator = true;
    fixture.detectChanges();

    let stepIndicatorElem = sliderElem.query(By.css('.step-indicators'));
    expect(stepIndicatorElem.query(By.css('span'))).toBeTruthy('Step indicator should be displayed!');

    npnSlider.showStepIndicator = false;
    npnSlider.ngOnChanges({});
    fixture.detectChanges();

    expect(stepIndicatorElem.query(By.css('span'))).toBeFalsy('Step indicator should not be displayed');
  });

  it("should palce left handler on right position with selectedValues", ()=>{
    npnSlider.setMinSelectedValues = 3000;
    fixture.detectChanges();
    let leftValue = leftHandlerElem.styles.left.substr(0, 5) + leftHandlerElem.styles.left.substr(-1, 1);
    expect(leftValue).toBe('33.33%', "Left handler should be position with respect to the min selected value");

    npnSlider.setMinSelectedValues = 3500;
    npnSlider.ngOnChanges({
      setMinSelectedValues: new SimpleChange(3000, 3500, false)
    });
    fixture.detectChanges();
    leftValue = leftHandlerElem.styles.left.substr(0, 5) + leftHandlerElem.styles.left.substr(-1, 1);
    expect(leftValue).toBe('33.33%', "Left handler position should not change");
  });

  it("should place right handler on right position with selectedValues", ()=>{
    npnSlider.setMaxSelectedValues = 4000;
    fixture.detectChanges();
    let rightValue = rightHandlerElem.styles.left.substr(0, 5) + rightHandlerElem.styles.left.substr(-1, 1);
    expect(rightValue).toBe('66.66%', "Right handler should be position with respect to the max selected value");

    npnSlider.setMaxSelectedValues = 3500;
    npnSlider.ngOnChanges({
      setMaxSelectedValues: new SimpleChange(4000, 3500, false)
    });
    fixture.detectChanges();
    rightValue = rightHandlerElem.styles.left.substr(0, 5) + rightHandlerElem.styles.left.substr(-1, 1);
    expect(rightValue).toBe('66.66%', "Right handler position should not change");
  });
});
