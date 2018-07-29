# NpnSlider (A Multi Range Slider Angular Component)

[NpnSlider](https://npnm.github.io/NpnSlider/) is reusable multi range slider component using Angular6

## Installation
### NPM
```sh
npm install --save npn-slider
```

## Usage

```html
<npn-slider [min]="2006" [max]="2020" (onChange)="onSliderChange($event)"></npn-slider>
```

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

