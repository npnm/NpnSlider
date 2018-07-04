import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NpnSliderModule } from "../../projects/npn-slider/src/lib/npn-slider.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NpnSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
