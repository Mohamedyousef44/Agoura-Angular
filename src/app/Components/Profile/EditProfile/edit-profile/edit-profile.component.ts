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
  validationForm:any;


  //get user id from route
  constructor(
    myRoute: ActivatedRoute,
    public myService: MainPageService,
    public router: Router
  ) {
    // this.ID = myRoute.snapshot.params['id'];
  }



  //get the user from db to remeber the data and validate user updates
  ngOnInit(): void {
    this.myService.GetUserByID(this.ID).subscribe({
      next: (data) => {
        console.log(data);
        this.User = data;
        this.validationForm = new FormGroup({
            userName: new FormControl(this.User.userName, [Validators.required,Validators.minLength(3) ]),
            age: new FormControl(this.User.age, [Validators.required,Validators.pattern(/^[0-9]*$/),Validators.min(18)]),
            address: new FormControl(this.User.address, [Validators.required]),
            phone: new FormControl(this.User.phone, [Validators.required,Validators.minLength(10),Validators.pattern(/^[0-9]*$/)]),
            email: new FormControl(this.User.email, [Validators.email, Validators.required]),
            profileImage: new FormControl(this.User.profileImage, [ Validators.pattern(/\.(jpe?g|webp|png)$/i),]),
            about:new FormControl(this.User.about)
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




//send data to database
updateUser(){
  if (this.validationForm.valid){
    this.myService.UpdateUser(this.validationForm.value,this.ID).subscribe(data => {
        console.log(data);})
        this.router.navigateByUrl('/');
  }
}



}
