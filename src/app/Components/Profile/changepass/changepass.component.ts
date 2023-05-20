import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProfilePageService } from 'src/app/Service/profile-page.service';

@Component({
  selector: 'changepass-user',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css'],
})
export class ChangePassComponent implements OnInit {
  userId: any;
  validationForm: any;

  constructor(
    private route: ActivatedRoute,
    private myService: ProfilePageService
  ) {
    this.route.parent?.params.subscribe((data) => {
      this.userId = data['id'];
    });
  }
  ngOnInit(): void {
    this.validationForm = new FormGroup({
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  get password() {
    return this.validationForm.controls['password'].valid;
  }

  isPasswordDirty() {
    return this.validationForm.controls['password'].dirty;
  }

  changePassword(id: any) {
    if (this.validationForm.valid) {
      const password = this.validationForm.controls['password'].value;
      this.myService.changeUserPassword(id, { password }).subscribe();
    }
  }
}
