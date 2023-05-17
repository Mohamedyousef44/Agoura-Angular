import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResetPasswordService } from '../../Service/reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  newPassword: string = '';
  confirmPassword: string = '';
  resetToken: string = '';

  constructor(
    private resetPasswordService: ResetPasswordService,
    private router: Router
  ) {}

  resetPassword() {
    this.resetPasswordService.resetPassword(this.resetToken, this.newPassword).subscribe(
      response => {
        console.log(response);
        // Handle successful response
        this.router.navigate(['/login']);
      },
      error => {
        console.error(error);
        // Handle error
      }
    );
  }

  onSubmit() {
    if (this.newPassword !== this.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    this.resetPassword();
  }
}
