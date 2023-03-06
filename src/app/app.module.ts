import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SectionDiv1Component } from './section-div1/section-div1.component';
import { SectionDiv2Component } from './section-div2/section-div2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SectionDiv1Component,
    SectionDiv2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
