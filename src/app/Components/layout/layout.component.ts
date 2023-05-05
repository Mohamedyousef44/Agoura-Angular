import { Component, OnInit } from '@angular/core';
import { UserHomeDataService } from 'src/app/Service/user-home-data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  extractedData: any
  notificationData: any
  cartData: any
  isCart: any
  id:any;
  constructor(private service: UserHomeDataService){
    this.id=1;
  }
  ngOnInit(): void {
    this.id=1;
    this.service.getUserById(this.id).subscribe({
      next:(data: any)=>{
        this.notificationData = data["notifications"]
        this.cartData = data["cart"]
        // console.log(this.notificationData)
      } ,
      error:(e:Error)=> console.log(e)
    })

  }



}
