import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpnSliderComponent } from './npn-slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NpnSliderComponent],
  exports: [NpnSliderComponent]
})
export class NpnSliderModule { }
