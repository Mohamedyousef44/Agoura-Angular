import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfilePageService } from 'src/app/Service/profile-page.service';
import { distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.css']
})
export class AboutUserComponent implements OnInit , AfterViewInit{
  ID: any
  UserDetails:any

  constructor(public route: ActivatedRoute , private myService: ProfilePageService){

  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.myService.ID.pipe(distinctUntilChanged()).subscribe((res) => {
      this.ID = res;

      this.myService.GetUserByID(this.ID).subscribe({
        next: (data: any) => {
          this.UserDetails = data;
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    });
  }
}



