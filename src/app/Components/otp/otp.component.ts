import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OtpService } from '../../Service/otp.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {
  otp: string= '';
  resetToken: string = '';

  constructor(private otpService: OtpService, private router: Router) {}

  onSubmit() {
    this.otpService.verifyOTP( this.otp).subscribe(
      response => {
        console.log(response);
        this.resetToken = response.resetToken;
        // Handle successful response
      },
      error => {
        console.error(error);
        // Handle error
      }
    );
  }
}
