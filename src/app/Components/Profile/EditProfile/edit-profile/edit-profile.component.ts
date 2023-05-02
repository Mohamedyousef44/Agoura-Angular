import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainPageService } from 'src/app/Service/main-page.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  ID:any
  constructor(myRoute: ActivatedRoute, public myService:MainPageService,public router:Router) {
    this.ID = myRoute.snapshot.params['id'];
  }

}
