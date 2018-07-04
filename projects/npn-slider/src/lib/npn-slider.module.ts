import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NpnSliderComponent } from './npn-slider.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [NpnSliderComponent],
  exports: [NpnSliderComponent]
})
export class NpnSliderModule { }
