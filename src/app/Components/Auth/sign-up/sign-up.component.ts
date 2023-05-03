import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [
  ]
})
export class SignUpComponent {
  public validationForm = new FormGroup({
    email: new FormControl(null,[Validators.required, Validators.email]),
    username : new FormControl (null,[Validators.required , Validators.minLength(3)]),
    password: new FormControl(null,[ Validators.required, Validators.minLength(10), Validators.maxLength(60) ])
  });

  validate(){
    if (this.validationForm.controls["email"].valid && this.validationForm.controls["password"].valid && this.validationForm.controls["username"].valid){
      // Send data to the backend, the data validation == True
    }
  }
  get email () {
    return this.validationForm.controls["email"].valid;
  }
  get password () {
    return this.validationForm.controls["password"].valid;
  }

  get username () {
    return this.validationForm.controls["username"].valid;
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
}
