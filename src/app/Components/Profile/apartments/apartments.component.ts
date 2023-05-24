import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilePageService } from 'src/app/Service/profile-page.service';
import jwt_decode from "jwt-decode";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {

  userId: any;
  apartmentData: any;
  result: any;
  userToken: any

  constructor(
    private ProfileService: ProfilePageService,
    private router: ActivatedRoute,
    private route: Router,
    private spinner: NgxSpinnerService
    ){
      this.router.parent?.params.subscribe((data: any)=>{
          this.userId = data['id']
      })
      this.userToken = localStorage.getItem('X-Auth-Token')
  }

  ngOnInit(): void {
      this.spinner.show()
      this.ProfileService.getUserApartments(this.userId).subscribe({
        next:(data: any)=>{
           this.result = data
          if(!this.result.success){
              this.route.navigateByUrl('/notfound')
          }else{
              this.apartmentData = this.result.data
          }
        },
    })
    this.spinner.hide()
  }


  decode(token: any){
    if(token){
      var decoded = jwt_decode(token)
      return decoded
    }
    return false
  }

  isAuthorized(){
    const user : any = this.decode(this.userToken)
    if(user) return this.userId == user.userId
    return false
  }


}
