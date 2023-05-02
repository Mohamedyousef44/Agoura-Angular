import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FacebookButtonComponent } from './Components/Auth/thirdPartyLoginButtons/facebook-button/facebook-button.component';
import { GoogleButtonComponent } from './Components/Auth/thirdPartyLoginButtons/google-button/google-button.component';
import { AppleButtonComponent } from './Components/Auth/thirdPartyLoginButtons/apple-button/apple-button.component';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';
import { MainPageItemsSectionComponent } from './MainPageComponent/main-page-items-section/main-page-items-section.component';
import { HttpClientModule }from'@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CategoryScrollerComponent } from './Components/category-scroller/category-scroller.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterColumnComponent } from './Components/footer-column/footer-column.component';
import { FooterUpperComponent } from './Components/footer-upper/footer-upper.component';
import { FooterLowerComponent } from './Components/footer-lower/footer-lower.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FacebookButtonComponent,
    GoogleButtonComponent,
    AppleButtonComponent,
    SignUpComponent,
    MainPageItemsSectionComponent,
    ProductDetailsComponent,
    NavBarComponent,
    HomeComponent,
    FooterColumnComponent,
    FooterUpperComponent,
    FooterLowerComponent,
    FooterComponent,
    CategoryScrollerComponent,
    LayoutComponent,
    OffcanvasComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
