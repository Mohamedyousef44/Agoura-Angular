import { Component } from '@angular/core';
import { ForgetPasswordService } from '../../Service/forget-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email: string ='';

  constructor(private forgetPasswordService: ForgetPasswordService) {}

  onSubmit() {
    this.forgetPasswordService.sendOTP(this.email).subscribe(
      response => {
        console.log(response);
        // Handle successful response and navigate to reset password page
        //this.router.navigate(['/otp']);

      },
      error => {
        console.error(error);
        // Handle error
      }
    );
  }
}
