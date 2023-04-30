import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterColumnComponent } from './Components/footer-column/footer-column.component';
import { FooterUpperComponent } from './Components/footer-upper/footer-upper.component';
import { FooterLowerComponent } from './components/footer-lower/footer-lower.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterColumnComponent,
    FooterUpperComponent,
    FooterLowerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
