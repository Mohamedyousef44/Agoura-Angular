import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  public userData : any = {} ;
  public error!:string|null; 
  public validationForm = new FormGroup({
    email: new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null,[ Validators.required, Validators.minLength(8), Validators.maxLength(60) ])
  });
  constructor (private myService: AuthService , private route:Router) { }

  validate(){
    if (this.validationForm.valid){
      console.log("Heelo");
      this.userData['email'] = this.validationForm.controls["email"].value;
      this.userData['password'] = this.validationForm.controls["password"].value;      
      this.login();
    }
  }
  get email () {
    return this.validationForm.controls["email"];
  }
  get password () {
    return this.validationForm.controls["password"];
  }

  login() {
    this.myService.LoginWithSystem(this.userData).subscribe({
        next:(data:any)=>{
          console.log(data.body);
          if(data.body.success){
            localStorage.setItem('X-Auth-Token', data.body.myToken);
            this.route.navigateByUrl("/home");
          }
          this.error = data.body.message;
        },
        error:(err)=> {
          this.error = err.error.message;
        }
      }
    )
  }
}
