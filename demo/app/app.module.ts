import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NpnSliderModule } from "npn-slider";

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
