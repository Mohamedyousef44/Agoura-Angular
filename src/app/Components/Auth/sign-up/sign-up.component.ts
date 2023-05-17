import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [
  ]
})
export class SignUpComponent {
  public userData : any = {}
  public error!:string|null;
  public validationForm:FormGroup ;

  public constructor(private myService:AuthService,private route:Router){

    this.validationForm = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      username : new FormControl (null,[Validators.required , Validators.minLength(3)]),
      password: new FormControl(null,[ Validators.required, Validators.minLength(10), Validators.maxLength(60) ]),
      confirmPassword : new FormControl(null , [Validators.required , Validators.minLength(10), Validators.maxLength(60) ])
    });
  }

  validate(){
    if (this.validationForm.valid){
      this.userData['email'] = this.validationForm.controls["email"].value ;
      this.userData['name'] = this.validationForm.controls["username"].value ;
      this.userData['password'] = this.validationForm.controls["password"].value ;
      this.userData['confirmPassword'] = this.validationForm.controls["confirmPassword"].value ;
      this.error=null;  
      this.signUp()
    }
  }
  get email () {
    return this.validationForm.controls["email"].valid;
  }

  get username () {
    return this.validationForm.controls["username"].valid;
  }

  get password () {
    return this.validationForm.controls["password"].valid;
  }

  get confirmPassword () {
    return this.validationForm.controls["confirmPassword"].valid;
  }
  
  isEmailDirty(){
    return this.validationForm.controls["email"].dirty;
  }
  isUsernameDirty(){
    return this.validationForm.controls["username"].dirty;
  }
  isPasswordDirty(){
    return this.validationForm.controls["password"].dirty;
  }

  isConfirmPasswordDirty(){
    return this.validationForm.controls["confirmPassword"].dirty;
  }

  arePasswordsEqual() {
    if (  this.validationForm.controls["password"].value ==  this.validationForm.controls["confirmPassword"].value) {
      return false;
    }
    else {
      return true;
    }
  }
  signUp(){
    this.myService.signUp(this.userData).subscribe(
      {
        next:(data:any)=>{
          if(data.success){
            this.route.navigateByUrl("/login")
          }
          this.error=data.message;
        },
        error:(err)=>err
      }
    )
  }
}
