import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProfilePageService } from 'src/app/Service/profile-page.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userID: any;
  UserDetails: any;
  userImage = " ";
  validationForm: any;
  profileValid = false;
  userToken: any;

  constructor(
    public myService: ProfilePageService,
    public route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
    this.route.params.subscribe((params) => {
      this.userID = params['id'];
    });
    this.userToken = localStorage.getItem('X-Auth-Token')
  }

  goDown() {
    window.scroll(0, 630);
  }

  ngOnInit(): void {

    this.myService.Image.subscribe((info) => {
      this.userImage = info.data.image;
    });

    this.spinner.show('homeSpinner');
    this.myService.GetUserByID(this.userID).subscribe({
      next: (data: any) => {
        this.UserDetails = data;
        const image = data.image;
        if (image) this.userImage = image
        else  this.userImage = '/assets/imgs/default.jpg';
        this.spinner.hide('homeSpinner');

        this.validationForm = new FormGroup({
          profileImage: new FormControl(null),
        });
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  onFileSelected(event: any) {
    if (this.validateFile(event.target.files[0].name)) {
      this.profileValid = true;
      this.userImage = event.target.files[0];
      return;
    }
  }

  validateFile(name: string) {
    let ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'png' || ext.toLowerCase() == 'jpg') {
      return true;
    } else {
      return false;
    }
  }

  changeImage() {
    const fd = new FormData();
    fd.append('profileImage', this.userImage);
    this.myService.changeUserPicture(this.userID, fd).subscribe({
      next: (response: any) => {
        this.userImage = response.data['image'];
      },
    });
  }

  decode(token: any){
    if(token){
      var decoded = jwt_decode(token)
      return decoded
    }
    return false
  }

  isAuthorized(){
    const user : any = this.decode(this.userToken)
    if(user) return this.userID == user.userId
    return false
  }
}
