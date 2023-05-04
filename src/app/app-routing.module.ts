import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HomeComponent } from './Components/home/home.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';
import { AboutComponent } from './Components/about/about.component';
import { CreateProductFormComponent } from './Components/create-product-form/create-product-form.component';
import { BidHistoryComponent } from './Components/bid-history/bid-history.component';
import { NotfoundPageComponent } from './Components/notfound-page/notfound-page.component';


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
    ],
  },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '**', component: NotfoundPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
