import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { ForgetPasswordService } from '../../Service/forget-password.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email: string ='';

  constructor(private forgetPasswordService: ForgetPasswordService, private router: Router) {}

  onSubmit() {
    this.forgetPasswordService.sendOTP(this.email).subscribe(
      response => {
        console.log(response);
        // Handle successful response and navigate to reset password page
        this.router.navigate(['/otp']);


      },
      error => {
        console.error(error);
        // Handle error
      }
    );
  }
}
