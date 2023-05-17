import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HomeComponent } from './Components/home/home.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';
import { CheckoutComponent } from './Components/Payment/checkout/checkout.component';
import { ProfileComponent } from './Components/Profile/profile/profile.component';
import { EditProfileComponent } from './Components/Profile/EditProfile/edit-profile/edit-profile.component';
import { AboutComponent } from './Components/about/about.component';
import { CreateProductFormComponent } from './Components/create-product-form/create-product-form.component';
import { BidHistoryComponent } from './Components/bid-history/bid-history.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { OtpComponent } from './Components/otp/otp.component';
import { NotfoundPageComponent } from './Components/notfound-page/notfound-page.component';
import { DefaultLayoutComponent } from './Components/dash-board/containers';
import { BidsComponent } from './Components/dash-board/views/bids/bids.component';
import { ChartsComponent } from './Components/dash-board/views/charts/charts.component';
import { DashboardBidDetailsComponent } from './Components/dash-board/views/dashboard-bid-details/dashboard-bid-details.component';
import { EditProductFormComponent } from './Components/edit-product-form/edit-product-form.component';
import { UserBidsComponent } from './Components/Profile/bids/bids.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'place/create', component: CreateProductFormComponent },
      { path: 'place/:id', component: ProductDetailsComponent },
      { path: 'place/:id/edit', component: EditProductFormComponent },
      { path: 'place/:id/history', component: BidHistoryComponent },
      { path: 'about', component: AboutComponent },
      { path: "checkout" , component : CheckoutComponent},
      { path: "users/:id",component:ProfileComponent,children:[
          { path:"edit",component:EditProfileComponent , pathMatch:'full'},
          { path:"bids",component:UserBidsComponent},
                ]},

      { path: "dashboard" ,component:DefaultLayoutComponent ,children:[
        { path: '', redirectTo: 'stats', pathMatch: 'full' },
        { path: "bids",component:BidsComponent },
        { path: "bids/:id",component:DashboardBidDetailsComponent },
        { path: "stats",component:ChartsComponent }
      ]},
    ],
  },
  {path : '404-NotFound', component: NotfoundPageComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'signup' , component: SignUpComponent},
  {path : 'forgetpassword' , component: ForgetPasswordComponent},
  {path : 'otp', component: OtpComponent},
  {path : '**', component: NotfoundPageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
