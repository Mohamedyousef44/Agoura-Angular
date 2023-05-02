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
  ID= 1;
  User: any;

  //get user id from route
  constructor(myRoute: ActivatedRoute,public myService: MainPageService,public router: Router) {
    // this.ID = myRoute.snapshot.params['id'];
  }

  //get the user from db to remeber the data
  ngOnInit(): void {
    this.myService.GetUserByID(this.ID).subscribe({
      next: (data) => {
        console.log(data);
        this.User = data;
      },
      error: (err) => { },
    });
  }


  validationForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    age: new FormControl(null, [
      Validators.min(20),
      Validators.max(40),
      Validators.required,
    ]),
    email: new FormControl(null, [Validators.email, Validators.required]),

  });

}
