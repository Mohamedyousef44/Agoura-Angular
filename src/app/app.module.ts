import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FacebookButtonComponent } from './Components/Auth/thirdPartyLoginButtons/facebook-button/facebook-button.component';
import { GoogleButtonComponent } from './Components/Auth/thirdPartyLoginButtons/google-button/google-button.component';
import { AppleButtonComponent } from './Components/Auth/thirdPartyLoginButtons/apple-button/apple-button.component';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';

const routes : Routes = [
  {path : 'login' , component : LoginComponent},
  {path : 'signup' , component: SignUpComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    FacebookButtonComponent,
    GoogleButtonComponent,
    AppleButtonComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
