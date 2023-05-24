import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilePageService } from 'src/app/Service/profile-page.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {

  userId: any;
  apartmentData: any;
  result: any;

  constructor(
    private ProfileService: ProfilePageService,
    private router: ActivatedRoute,
    private route: Router
    ){
      this.router.parent?.params.subscribe((data: any)=>{
          this.userId = data['id']
      })
  }

  ngOnInit(): void {

      this.ProfileService.getUserApartments(this.userId).subscribe({
        next:(data: any)=>{
           this.result = data
          if(!this.result.success){
              this.route.navigateByUrl('/notfound')
          }else{
              this.apartmentData = this.result.data
              console.log("from apartment page"+this.apartmentData)
          }
        },
    })
  }

}
