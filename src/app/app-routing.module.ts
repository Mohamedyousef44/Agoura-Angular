import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HomeComponent } from './Components/home/home.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';
import { CreateProductFormComponent } from './Components/create-product-form/create-product-form.component';
import { BidHistoryComponent } from './Components/bid-history/bid-history.component';
import { CartComponent } from './Components/cart/cart.component';
import { NotificationComponent } from './Components/notification/notification.component';


const routes: Routes = [

  {path: "",redirectTo: '/home' , pathMatch: 'full' },
  {path: "",component:LayoutComponent,children:[
    {path : "home",component:HomeComponent},
    {path:"place/create",component:CreateProductFormComponent},
    {path:"place/:id",component:ProductDetailsComponent},
    {path: "users/cart/:id" , component:CartComponent},
    {path: "users/notification/:id" , component:NotificationComponent},
    { path: 'bidhistory', component: BidHistoryComponent },

  ]
},

  {path : 'login' , component : LoginComponent},
  {path : 'signup' , component: SignUpComponent}

  // {path : "**",}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
