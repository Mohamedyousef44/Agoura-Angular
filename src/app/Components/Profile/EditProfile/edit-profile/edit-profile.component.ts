import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilePageService } from 'src/app/Service/profile-page.service';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  User: any;
  validationForm:any;
  myForm: any;
  ProfileImage:any;
  userId: any;
  showPass = false;

  constructor(
    public myService: ProfilePageService,
    public router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
    this.route.parent?.paramMap.subscribe(params => {
      this.userId = params.get('id');
    });
  }

  //   imageExtensionValidator(allowedExtensions: string[]): ValidatorFn {
  //   return (control: AbstractControl): {[key: string]: any} | null => {
  //     const file = control.value;
  //     if (file) {
  //       const fileExtension = file.name.split('.').pop().toLowerCase();
  //       if (allowedExtensions.indexOf(fileExtension) === -1) {
  //         return {'invalidExtension': true};
  //       }
  //     }
  //     return null;
  //   };
  // }

  ngOnInit(): void {

        this.myService.GetUserByID(this.userId).subscribe({
          next: (data) => {
            console.log(data);
            this.User = data;
            this.validationForm = new FormGroup({
                userName: new FormControl(this.User.name, [Validators.required,Validators.minLength(3) ]),
                // age: new FormControl(this.User.age, [Validators.required,Validators.pattern(/^[0-9]*$/),Validators.min(18)]),
                // address: new FormControl(this.User.address, [Validators.required]),
                // phone: new FormControl(this.User.phone, [Validators.required,Validators.minLength(10),Validators.pattern(/^[0-9]*$/)]),
                email: new FormControl(this.User.email, [Validators.email, Validators.required]),
                profileImage: new FormControl( this.User.imag ),
                password: new FormControl(this.User.password)
              });
            // this.validationForm.patchValue(this.User)

          },
          error: (err) => {console.log(err)},
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


  onFileSelected(event: any){
    this.ProfileImage=event.target.files[0]
  }

  updateUser(){
    this.spinner.show('updateSpinner')
    if (this.validationForm.valid) {
      const fd = new FormData();
      fd.append('data', JSON.stringify(this.validationForm.value));

      if (this.ProfileImage instanceof File) {
        fd.append('profileImage', this.ProfileImage);
      }

      this.myService.UpdateUser(fd,this.userId)
    }
  }

}
