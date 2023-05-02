import { Component } from '@angular/core';
import { MainPageService } from 'src/app/Service/main-page.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(public myService:MainPageService){

  }
}
