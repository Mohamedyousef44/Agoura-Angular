import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilePageService } from 'src/app/Service/profile-page.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  userId: any;
  orderData: any;
  result: any;

  constructor(
    private ProfileService: ProfilePageService,
    private router: ActivatedRoute,
    private route: Router
    ){
      this.router.parent?.params.subscribe(data=>{
          this.userId = data['id']
      })
  }

  ngOnInit(): void {

      this.ProfileService.getUserBids(this.userId).subscribe({
        next:(data)=>{
           this.result = data
          if(!this.result.success){
              this.route.navigateByUrl('/notfound')
          }else{
              this.orderData = this.result.data
          }
        },
    })
  }

}
