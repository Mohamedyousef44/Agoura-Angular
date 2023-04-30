import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { MainPageItemsSectionComponent } from './MainPageComponent/main-page-items-section/main-page-items-section.component';
import{HttpClientModule}from'@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainPageItemsSectionComponent
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
