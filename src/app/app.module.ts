import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorMenuComponent } from './color-menu/color-menu.component';
import { ColorTvComponent } from './color-tv/color-tv.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorMenuComponent,
    ColorTvComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
