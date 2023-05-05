import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainPageService } from 'src/app/Service/main-page.service';

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.css']
})
export class AboutUserComponent {
  ID=1;
  UserDetails:any

  constructor(public myService:MainPageService,myRoute:ActivatedRoute){
    //
    // this.ID = myRoute.snapshot.params["id"];-->active this code when data static
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



