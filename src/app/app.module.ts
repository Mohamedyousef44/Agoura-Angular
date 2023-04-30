import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { LoginComponent } from './Components/login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path : 'login' , component : LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent
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
