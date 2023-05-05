import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResetPasswordService } from 'src/app/Service/reset-password.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  email: string ='';
  otpCode: string ='';
  newPassword: string= '';

  constructor(private resetPasswordService: ResetPasswordService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.resetPasswordService.verifyOtpCode(this.email, this.otpCode).subscribe(
      response => {
        console.log(response);
        this.resetPasswordService.resetPassword(this.email, this.newPassword).subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/login']);
          },
          error => {
            console.log(error);
          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }
}
