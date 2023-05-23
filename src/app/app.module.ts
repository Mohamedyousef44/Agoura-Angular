import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { FacebookButtonComponent } from './Components/Auth/thirdPartyLoginButtons/facebook-button/facebook-button.component';
import { GoogleButtonComponent } from './Components/Auth/thirdPartyLoginButtons/google-button/google-button.component';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';
import { HTTP_INTERCEPTORS, HttpClientModule }from'@angular/common/http';
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
import { CheckoutComponent } from './Components/Payment/checkout/checkout.component';
import { PaymentMethodComponent } from './Components/Payment/payment-method/payment-method.component';
import { ProfileComponent } from './Components/Profile/profile/profile.component';
import { EditProfileComponent } from './Components/Profile/EditProfile/edit-profile/edit-profile.component';
import { AboutComponent } from './Components/about/about.component';
import { CreateProductFormComponent } from './Components/create-product-form/create-product-form.component';
import { BidHistoryComponent } from './Components/bid-history/bid-history.component';
import { OffcanvasComponent } from './Components/offcanvas/offcanvas.component';
import { UserHomeDataService } from './Service/user-home-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { OtpComponent } from './Components/otp/otp.component';
import { UpToTopComponent } from './Components/up-to-top/up-to-top.component';
import { NotfoundPageComponent } from './Components/notfound-page/notfound-page.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { MainPageItemsSectionComponent } from './Components/main-page-items-section/main-page-items-section.component';
import { AuthInterceptor } from './intercreptors/auth.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { ResponseInterceptor } from './intercreptors/response.interceptor';
import { DefaultLayoutComponent,DefaultHeaderComponent } from './Components/dash-board/containers';
import { EditProductFormComponent } from './Components/edit-product-form/edit-product-form.component';
import { ToastModule } from '@coreui/angular';
import { ChangePassComponent } from './Components/Profile/changepass/changepass.component';

import {
  SidebarModule,
  NavModule,
  HeaderModule,
  GridModule,
  TableModule,
  UtilitiesModule,
  CardModule
} from '@coreui/angular';

import { BidsComponent } from './Components/dash-board/views/bids/bids.component';
import { ChartsComponent } from './Components/dash-board/views/charts/charts.component';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { DashboardBidDetailsComponent } from './Components/dash-board/views/dashboard-bid-details/dashboard-bid-details.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { OrdersComponent } from './Components/Profile/orders/orders.component';
import { ApartmentsComponent } from './Components/Profile/apartments/apartments.component';
import { MytoastComponent } from './Components/mytoast/mytoast.component';
import { LoginModalComponent } from './Components/login-modal/login-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FacebookButtonComponent,
    GoogleButtonComponent,
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
    CheckoutComponent,
    PaymentMethodComponent,
    ProfileComponent,
    EditProfileComponent,
    AboutComponent,
    CreateProductFormComponent,
    BidHistoryComponent,
    OffcanvasComponent,
    ForgetPasswordComponent,
    OtpComponent,
    UpToTopComponent,
    NotfoundPageComponent,
    ResetPasswordComponent,
    DefaultHeaderComponent,
    DefaultLayoutComponent,
    BidsComponent,
    ChartsComponent,
    DashboardBidDetailsComponent,
    EditProductFormComponent,
    OrdersComponent,
    ApartmentsComponent,
    MytoastComponent,
    LoginModalComponent,
    ChangePassComponent,


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AppRoutingModule,
    SidebarModule,
    NavModule,
    HeaderModule,
    GridModule,
    TableModule,
    UtilitiesModule,
    ChartjsModule,
    CardModule,
    ToastModule,



  ],
  providers: [UserHomeDataService , {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
   },
   {
    provide: HTTP_INTERCEPTORS,
    useClass: ResponseInterceptor,
    multi: true
   }],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
