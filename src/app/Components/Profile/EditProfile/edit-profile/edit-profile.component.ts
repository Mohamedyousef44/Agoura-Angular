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
  validationForm:any

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
        this.validationForm = new FormGroup({
            userName: new FormControl(null, [Validators.required,Validators.minLength(3) ]),
            age: new FormControl(null, [Validators.required]),
            address: new FormControl(null, [Validators.required]),
            phone: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.email, Validators.required]),
            profileImage: new FormControl(null, [ Validators.pattern(/\.(jpe?g|webp|png)$/i),]),
            // password: new FormControl(null,[  Validators.minLength(10), Validators.maxLength(60) ])
          });
        this.validationForm.patchValue(this.User)
      },
      error: (err) => {},
    });
  }





  get userName() {
    return this.validationForm.controls['userName'];
  }
  get age() {
    return this.validationForm.controls['age'];
  }
  get email() {
    return this.validationForm.controls['email'];
  }
  get phone() {
    return this.validationForm.controls['phone'];
  }
  get address() {
    return this.validationForm.controls['address'];
  }

  get profileImage() {
    return this.validationForm.controls['profileImage'];
  }
  get password () {
    return this.validationForm.controls["password"];
  }




updateUser(){
  if (this.validationForm.valid){
    this.myService.UpdateUser(this.validationForm.value,this.ID).subscribe(data => {
        console.log(data);})
        this.router.navigateByUrl('/students');
  }
}



}
