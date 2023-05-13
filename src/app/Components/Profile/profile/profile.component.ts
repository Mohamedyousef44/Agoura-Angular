import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(public myService:ProfilePageService , public route: ActivatedRoute ){
    this.route.params.subscribe(params => {
      this.userID = params['id'];
    })
  }

  ngOnInit(): void {
    this.myService.GetUserByID(this.userID).subscribe(
      {
        next:(data: any)=>{
          this.UserDetails = data;
          const image = data.image
          if(image == '') this.userImage = "/assets/imgs/home/h1.png"
        },
        error:(err: any)=>{console.log(err)}
      }
    )
  }
}

