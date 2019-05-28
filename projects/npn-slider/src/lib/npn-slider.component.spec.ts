import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import 'hammerjs';
import { NpnSliderComponent } from './npn-slider.component';
import { SliderHandlerEnum } from './slider-handler.enum';
import { DebugElement, SimpleChange } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NpnSliderComponent', () => {
  let npnSlider: NpnSliderComponent;
  let fixture: ComponentFixture<NpnSliderComponent>;
  let sliderElem: DebugElement;
  let leftHandlerElem: DebugElement;
  let rightHandlerElem: DebugElement;

  const handlerIndex = SliderHandlerEnum;

  let defaultMinValue = 2000;
  const defaultMaxValue = 5000;
  const defaultStepValue = 500;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NpnSliderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpnSliderComponent);
    npnSlider = fixture.componentInstance;

    applyValues();

    fixture.detectChanges();

    sliderElem = fixture.debugElement;
    leftHandlerElem = sliderElem.query(By.css('.left-handle'));
    rightHandlerElem = sliderElem.query(By.css('.right-handle'));
  });

  it('should create "npnSlider" with two handlers with correct position and correct values', () => {
    fixture.detectChanges();
    testBasicSliderBehavior();
  });

  it('slider should display step indicator', () => {
    npnSlider.showStepIndicator = true;
    npnSlider.ngOnChanges({});
    fixture.detectChanges();

    const stepIndicatorElem = sliderElem.query(By.css('.step-indicators'));
    expect(stepIndicatorElem.query(By.css('span'))).toBeTruthy('Step indicator should be displayed!');

    npnSlider.showStepIndicator = false;
    npnSlider.ngOnChanges({});
    fixture.detectChanges();

    expect(stepIndicatorElem.query(By.css('span'))).toBeFalsy('Step indicator should not be displayed');
  });

  it('should palce left handler on the correct position based on selectedValues', () => {
    npnSlider.setMinSelectedValues = 3000;
    npnSlider.ngOnChanges({
      setMinSelectedValues: new SimpleChange(0, 3000, false)
    });
    fixture.detectChanges();
    const leftValue = trimPercentageValue(leftHandlerElem.styles.left);
    expect(leftValue).toBe('33.33%', 'Left handler should be position with respect to the min selected value');
  });

  it('should place right handler on the correct position based on selectedValues', () => {
    npnSlider.setMaxSelectedValues = 4000;
    npnSlider.ngOnChanges({
      setMaxSelectedValues: new SimpleChange(0, 4000, false)
    });
    fixture.detectChanges();
    const rightValue = trimPercentageValue(rightHandlerElem.styles.left);
    expect(rightValue).toBe('66.66%', 'Right handler should be position with respect to the max selected value');
  });

  it('Left handler should move on handlerSliding() method call', () => {
    fixture.detectChanges();
    const sliderWidth = +sliderElem.nativeElement.children[0].children[0].offsetWidth;
    expect(sliderWidth).toBeDefined('Width of slider should be defined');

    const event = {
      clientX: 0,
      preventDefault: () => { }
    };
    npnSlider.setHandlerActive(event, handlerIndex.left);
    event.clientX = sliderWidth * 0.5; // taking half of slider width
    npnSlider.handlerSliding(event);
    npnSlider.setHandlerActiveOff();

    fixture.detectChanges();

    const expectValue = defaultMinValue + (defaultMaxValue - defaultMinValue) / 2;

    expect(leftHandlerElem.styles.left).toBe('50%', 'Left handler should be moved to the new value');
    expect(rightHandlerElem.styles.left).toBe('100%', 'Right handler should be at same the place');

    expect(leftHandlerElem.query(By.css('.handle-tooltip')).nativeElement.textContent).toBe(expectValue.toString());
  });

  it('Single range slider should only contain one handler', () => {
    npnSlider.multiRange = false;
    npnSlider.setMinSelectedValues = 2500;
    npnSlider.ngOnChanges({
      setMinSelectedValues: new SimpleChange(0, 2500, false)
    });
    fixture.detectChanges();
    leftHandlerElem = sliderElem.query(By.css('.left-handle'));
    rightHandlerElem = sliderElem.query(By.css('.right-handle'));

    expect(leftHandlerElem).toBeTruthy('Left handler should not be hidden');
    expect(rightHandlerElem).toBeNull('Right handler should be hidden');

    const filler = sliderElem.query(By.css('div.filler > span'));
    expect(trimPercentageValue(filler.styles.width)).toBe('16.66%');
  });

  function testBasicSliderBehavior() {
    expect(npnSlider).toBeTruthy();
    // Left handler and tooltip
    expect(leftHandlerElem.styles.left).toBe('0%', 'Left handler should be at left most side of slider');
    expect(leftHandlerElem.query(By.css('.handle-tooltip')).nativeElement.textContent).toBe(defaultMinValue.toString());
    // Right handler and tooltip
    expect(rightHandlerElem.styles.left).toBe('100%', 'Right handler should be at right most side of slider');
    expect(rightHandlerElem.query(By.css('.handle-tooltip')).nativeElement.textContent).toBe(defaultMaxValue.toString());
    // Values displayed at bottom of slider
    expect(sliderElem.query(By.css('.values > span:first-child')).nativeElement.textContent).toBe(defaultMinValue.toString());
    expect(sliderElem.query(By.css('.values > span:last-child')).nativeElement.textContent).toBe(defaultMaxValue.toString());
  }

  function applyValues() {
    npnSlider.setMinValues = defaultMinValue;
    npnSlider.setMaxValues = defaultMaxValue;
    npnSlider.stepValue = defaultStepValue;
  }

  describe('NpnSliderComponent InitValues', () => {

    it('init value is zero: should create "npnSlider" with two handlers with correct position and correct values', () => {
      fixture = TestBed.createComponent(NpnSliderComponent);
      npnSlider = fixture.componentInstance;
      defaultMinValue = 0;
      applyValues();

      fixture.detectChanges();

      sliderElem = fixture.debugElement;
      leftHandlerElem = sliderElem.query(By.css('.left-handle'));
      rightHandlerElem = sliderElem.query(By.css('.right-handle'));
      fixture.detectChanges();
      testBasicSliderBehavior();
      defaultMinValue = 2000;
    });
  });

});

function trimPercentageValue(value: string): string {
  return (value.length === 0) ? '' :
    value.substr(0, (value.length > 5) ? 5 : value.length - 1) + value.substr(-1, 1);
}
