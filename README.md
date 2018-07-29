# NpnSlider (A Multi Range Slider Component)

[NpnSlider](https://npnm.github.io/NpnSlider/) is reusable multi range slider component using Angular v6.0

## Installation
### NPM
```sh
npm install --save npn-slider
```
### Yarn
```sh
yarn add npn-slider
```

## Usage
### Html
```html
<npn-slider [min]="2006" [max]="2020" (onChange)="onSliderChange($event)"></npn-slider>
```
### Attributes
Attributes | Description
-----------|------------
@Input() <br> min: number | The minimum value of slider
@Input() <br> max: number | The maximum value of slider
@Input() <br> step: number | The value at which slider value should change
@Input() <br> showStepIndicator: boolean | Whether the step indicator should display or not
@Input() <br> minSelected: number | The selected value for slider's left handler
@Input() <br> maxSelected: number | The selected value for slider's right handler
@Output() <br> onChange: EventEmitter<number[]>() | The event will be fired on change of selected range of values. Returns: Selected range of values as a array[]

### Sample Code
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
```ts
/*Method to listen for onChange event from slider*/
onSliderChange(selectedValues: number[]) {
    this._currentValues = selectedValues;
}
```

