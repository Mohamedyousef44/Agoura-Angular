import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HomeComponent } from './Components/home/home.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';
import { AboutComponent } from './Components/about/about.component';

const routes: Routes = [

  {path: "",redirectTo: '/home' , pathMatch: 'full' },
  {path: "",component:LayoutComponent,children:[
    {path:"productdetails",component:ProductDetailsComponent}
  ]
},
  {path : "home",component:HomeComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'signup' , component: SignUpComponent},
  {path: 'about', component: AboutComponent },
  // {path : "**",}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
