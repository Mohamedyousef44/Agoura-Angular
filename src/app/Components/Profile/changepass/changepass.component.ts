import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfilePageService } from 'src/app/Service/profile-page.service';


@Component({
  selector: 'changepass-user',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangePassComponent {

  constructor(private route: ActivatedRoute , private myService: ProfilePageService){

    this.route.parent?.params.subscribe(data=>{
      console.log(data)
    })

  }

  changePassword(id: any){
    this.myService.changeUserPassword(id , {pass: '123456789'})
  }

}



