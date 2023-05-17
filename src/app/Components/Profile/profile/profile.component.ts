import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProfilePageService } from 'src/app/Service/profile-page.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userID: any
  UserDetails:any
  userImage: any

  constructor(public myService:ProfilePageService , public route: ActivatedRoute , private spinner: NgxSpinnerService ){
    this.route.params.subscribe(params => {
      this.userID = params['id'];
    })
  }

  goDown(){
    window.scroll(0 , 630)
  }

  ngOnInit(): void {
    this.spinner.show('profileSpinner')
    this.myService.Image.subscribe(info=>{
      this.userImage = info.data.image
    })
    this.myService.GetUserByID(this.userID).subscribe(
      {
        next:(data: any)=>{
          this.UserDetails = data;
          const image = data.image
          if(image == '') this.userImage = "/assets/imgs/home/h1.png"
          else this.userImage = image
          this.spinner.hide('profileSpinner')
        },
        error:(err: any)=>{console.log(err)}
      }
    )
  }
}

