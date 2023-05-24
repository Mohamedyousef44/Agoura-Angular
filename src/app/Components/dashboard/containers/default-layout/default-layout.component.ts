import { Component, OnInit } from '@angular/core';

import { navItems } from './_nav';
import { ProfilePageService } from 'src/app/Service/profile-page.service';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit{
  user:any;
  constructor(private userService:ProfilePageService,private auth:AuthService){

  }
  ngOnInit(): void {
    
    let user=this.auth.user();
    if(user){
      this.userService.GetUserByID(user.userId).subscribe({
        next:(res:any)=>{
          this.user=res|| "/assets/photos/avatar02.png";
        },
        error:(err:any)=>{
          console.log(err)
        }
      })
    }
    


  }

  public navItems = navItems;
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  


}
