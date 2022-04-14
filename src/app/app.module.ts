import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphyComponent } from './giphy/giphy.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FlagComponent } from './flag/flag.component';
import { GiphyDetailsComponent } from './giphy-details/giphy-details.component';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent,
    NavbarComponent,
    FlagComponent,
    GiphyDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
