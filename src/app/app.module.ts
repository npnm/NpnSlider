import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NpnSliderComponent } from './npn-slider/npn-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NpnSliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
