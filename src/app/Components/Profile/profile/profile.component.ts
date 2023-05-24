import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProfilePageService } from 'src/app/Service/profile-page.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userID: any;
  UserDetails: any;
  userImage: any;
  validationForm: any;
  profileValid = false;

  constructor(
    public myService: ProfilePageService,
    public route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
    this.route.params.subscribe((params) => {
      this.userID = params['id'];
    });
  }

  goDown() {
    window.scroll(0, 630);
  }

  ngOnInit(): void {
    this.spinner.show('imageSpinner');
    this.myService.Image.subscribe((info) => {
      this.userImage = info.data.image;
    });
    this.spinner.hide('imageSpinner');
    this.spinner.show('profileSpinner');
    this.myService.GetUserByID(this.userID).subscribe({
      next: (data: any) => {
        this.UserDetails = data;
        console.log(data.bids);
        // console.log(data.orders);
        console.log(data.ownedApartments);
        const image = data.image;
        if (image == '') this.userImage = '/assets/imgs/default.jpg';
        else this.userImage = image;
        this.spinner.hide('profileSpinner');

        this.validationForm = new FormGroup({
          profileImage: new FormControl(this.userImage),
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

  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'png') {
      return true;
    } else if (ext.toLowerCase() == 'jpg') {
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
}
