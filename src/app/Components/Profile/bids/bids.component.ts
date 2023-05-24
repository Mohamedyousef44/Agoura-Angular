import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilePageService } from 'src/app/Service/profile-page.service';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class UserBidsComponent implements OnInit {

  userId: any;
  bidData: any;
  result: any;
  userToken: any;

  constructor(
    private ProfileService: ProfilePageService,
    private router: ActivatedRoute,
    private route: Router
    ){
      this.router.parent?.params.subscribe(data=>{
          this.userId = data['id']
      })
      this.userToken = localStorage.getItem('X-Auth-Token')
  }

  ngOnInit(): void {

      this.ProfileService.getUserBids(this.userId).subscribe({
        next:(data)=>{
           this.result = data
          if(!this.result.success){
            console.log('from not found')
              this.route.navigateByUrl('/notfound')
          }else{
              this.bidData = this.result.data
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
function jwt_decode(token: any) {
  throw new Error('Function not implemented.');
}

