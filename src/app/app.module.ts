import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Auth/login/login.component';
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
import { ProfileComponent } from './Components/Profile/profile/profile.component';
import { EditProfileComponent } from './Components/Profile/EditProfile/edit-profile/edit-profile.component';
import { AboutUserComponent } from './Components/Profile/about-user/about-user.component';
import { AboutComponent } from './Components/about/about.component';
import { CreateProductFormComponent } from './Components/create-product-form/create-product-form.component';
import { BidHistoryComponent } from './Components/bid-history/bid-history.component';
import { OffcanvasComponent } from './Components/offcanvas/offcanvas.component';
import { UserHomeDataService } from './Service/user-home-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpToTopComponent } from './Components/up-to-top/up-to-top.component';
import { NotfoundPageComponent } from './Components/notfound-page/notfound-page.component';





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
    ProfileComponent,
    EditProfileComponent,
    AboutUserComponent,
    AboutComponent,
    CreateProductFormComponent,
    BidHistoryComponent,
    OffcanvasComponent,
    UpToTopComponent,
    NotfoundPageComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  providers: [UserHomeDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
