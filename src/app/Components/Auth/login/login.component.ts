import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  public validationForm = new FormGroup({
    email: new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null,[ Validators.required, Validators.minLength(8), Validators.maxLength(60) ])
  });

  validate(){
    if (this.validationForm.valid){
      // Send data to the backend, the data validation == True
    }
  }
  get email () {
    return this.validationForm.controls["email"];
  }
  get password () {
    return this.validationForm.controls["password"];
  }

}
