# [NpnSlider](https://npnm.github.io/NpnSlider/) (A Multi Range Slider Angular Component)

NpnSlider is a reusable range slider component using Angular v6.0. It can be used either as a multi range or a single range slider. By default, it is a multi range slider.

_[View Release Notes](https://github.com/npnm/NpnSlider/releases/tag/v1.3.2)_

## Usage
### Html
```html
<npn-slider [min]="2006" [max]="2020" (onChange)="onSliderChange($event)"></npn-slider>
```
### Attributes
Attributes | Description
-----------|------------
@Input() <br> **min**: number | The minimum value of slider
@Input() <br> **max**: number | The maximum value of slider
@Input() <br> **step**: number | The value at which slider value should change
@Input() <br> **showStepIndicator**: boolean | Whether the step indicator should display or not
@Input() <br> **minSelected**: number | The selected value for slider's left handler
@Input() <br> **maxSelected**: number | The selected value for slider's right handler
@Input() <br> **disabled**: string | To disable the slider. Valid values: _'true'_ or _'disabled'_ or _empty attribute_
@Input() <br> **multiRange**: boolean | To switch between Mutli range and Single range mode. Slider is multi range by default
@Input() <br> **hide-tooltip**: boolean | To hide the tooltip that shows on hover of slider handler. Default value: _'false'_
@Input() <br> **hide-values**: boolean | To hide values displayed at bottom of slider. Default value: _'false'_
@Output() <br> **onChange**: EventEmitter<number[]>() | The event will be fired on change of selected range of values.<br>_Returns: Selected range of values as an array[],_ <br>_On Single range mode, a number array with single value will be returned_

### Example and Sample Code
a) **Import _'NpnSliderModule'_ in your app module**
```ts
import { NpnSliderModule } from "npn-slider";
  
@NgModule({
  imports:[
    ..
    NpnSliderModule
    ..
  ]
})
``` 
b) **Add _'npn-slider'_ in your component html**
```html
<npn-slider [min]="1000" [max]="5000" (onChange)="onSliderChange($event)" [step]="500" [showStepIndicator]="true"></npn-slider>
```
c) **Add a method in your component class to listen for onChange event from slider** 
```ts
/*Method to listen for onChange event from slider*/
onSliderChange(selectedValues: number[]) {
    this._currentValues = selectedValues;
}
```
d) **You done. Run your app. cheers!** _[View Demo](https://npnm.github.io/NpnSlider/)_
