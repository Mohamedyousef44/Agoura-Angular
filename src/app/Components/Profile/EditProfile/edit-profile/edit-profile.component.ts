import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainPageService } from 'src/app/Service/main-page.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  ID = 1;
  User: any;
  UserNewData: any;

  //get user id from route
  constructor(
    myRoute: ActivatedRoute,
    public myService: MainPageService,
    public router: Router
  ) {
    // this.ID = myRoute.snapshot.params['id'];
  }

  //get the user from db to remeber the data
  ngOnInit(): void {
    this.myService.GetUserByID(this.ID).subscribe({
      next: (data) => {
        console.log(data);
        this.User = data;
      },
      error: (err) => {},
    });
  }

  //validate user inputs in update
  validationForm = new FormGroup({
    userName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    age: new FormControl(null, [
      Validators.min(20),
      Validators.max(40),
      Validators.required,
    ]),
    address: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.email, Validators.required]),
    profileImage: new FormControl(null, [
      Validators.pattern(/\.(jpe?g|webp)$/i),
    ]),
  });

  get name() {
    return this.validationForm.controls['userName'].value;
  }
  get age() {
    return this.validationForm.controls['age'].value;
  }
  get email() {
    return this.validationForm.controls['email'].value;
  }
  get phone() {
    return this.validationForm.controls['phone'].value;
  }
  get address() {
    return this.validationForm.controls['address'].value;
  }

  get profileImage() {
    return this.validationForm.controls['profileImage'].value;
  }

  get AgeValid() {
    return this.validationForm.controls['age'].valid;
  }
  get nameValid() {
    return this.validationForm.controls['userName'].valid;
  }

  get emailValid() {
    return this.validationForm.controls['email'].valid;
  }
  get addressValid() {
    return this.validationForm.controls['address'].valid;
  }
  get phoneValid() {
    return this.validationForm.controls['phone'].valid;
  }

  get profileImageValid() {
    return this.validationForm.controls['profileImage'].valid;
  }

  updateValidatedData(
    newname: any,
    newemail: any,
    newage: any,
    newprofileImage: any,
    newadress: any,
    newAbout: any,
    newphone: any
  ) {
    if (this.validationForm.valid) {
      this.UserNewData = {
        userName: newname,
        age: newage,
        email: newemail,
        profileImage: newprofileImage,
        address: newadress,
        About: newAbout,
        phone: newphone,
      };
    }

  }

updateUserDataInDataBase(){

this.myService.UpdateUser(this.UserNewData,this.ID).subscribe(data => {
  console.log(data);})
  this.router.navigateByUrl('/students');

}
}
