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
import { AboutComponent } from './Components/about/about.component';
import { CreateProductFormComponent } from './Components/create-product-form/create-product-form.component';
import { BidHistoryComponent } from './Components/bid-history/bid-history.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'place/create', component: CreateProductFormComponent },
      { path: 'place/:id', component: ProductDetailsComponent },
      { path: 'bidhistory/:id', component: BidHistoryComponent },
      { path: 'about', component: AboutComponent },
      {path:"user/:id",component:ProfileComponent,children:[
          {path:"edit",component:EditProfileComponent},
          {path:"about",component:AboutUserComponent}
        ]}
    ],
  },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signup', component: SignUpComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
