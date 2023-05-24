import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilePageService } from 'src/app/Service/profile-page.service';
import jwt_decode from "jwt-decode";

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
    private route: Router
    ){
      this.router.parent?.params.subscribe((data: any)=>{
          this.userId = data['id']
      })
      this.userToken = localStorage.getItem('X-Auth-Token')
  }

  ngOnInit(): void {

    console.log(this.userToken)
    console.log(this.isAuthorized())

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
