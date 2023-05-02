import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainPageService } from 'src/app/Service/main-page.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  ID:any
  UserDetails:any

  constructor(public myService:MainPageService,myRoute:ActivatedRoute){
    this.ID = myRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.myService.GetUserByID(this.ID).subscribe(
      {
        next:(data: any)=>{
          console.log(data)
          this.UserDetails = data;
        },
        error:(err: any)=>{console.log(err)}
      }
    )
  }
}

