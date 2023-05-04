import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HomeComponent } from './Components/home/home.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';
import { ProfileComponent } from './Components/Profile/profile/profile.component';
import { EditProfileComponent } from './Components/Profile/EditProfile/edit-profile/edit-profile.component';
import { AboutUserComponent } from './Components/Profile/about-user/about-user.component';

const routes: Routes = [

  {path: "",redirectTo: '/home' , pathMatch: 'full' },
  {path: "",component:LayoutComponent,children:[
    {path:"productdetails",component:ProductDetailsComponent},
    {path:"user/:id",component:ProfileComponent,children:[
      // {path:"",redirectTo: '/user/:id/about' , pathMatch: 'full'},
{path:"edit",component:EditProfileComponent},
{path:"about",component:AboutUserComponent}
    ]}
  ]
},
  {path : "home",component:HomeComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'signup' , component: SignUpComponent}
  // {path : "**",}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
