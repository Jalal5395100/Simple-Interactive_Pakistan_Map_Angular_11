import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsmapComponent } from './usmap/usmap.component';
import { PakmapComponent } from './pakmap/pakmap.component';

@NgModule({
  declarations: [
    AppComponent,
    UsmapComponent,
    PakmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
