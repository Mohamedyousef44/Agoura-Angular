import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfilePageService } from 'src/app/Service/profile-page.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  ID=1;
  UserDetails:any

  constructor(public myService:ProfilePageService){
  }

  ngOnInit(): void {
    this.myService.GetUserByID(this.ID).subscribe(
      {
        next:(data: any)=>{
          console.log(data)
          this.UserDetails = data;
          console.log(data)
        },
        error:(err: any)=>{console.log(err)}
      }
    )
  }
}

