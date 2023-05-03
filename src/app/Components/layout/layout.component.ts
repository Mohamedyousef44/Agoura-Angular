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
  constructor(private service: UserHomeDataService){

  }
  ngOnInit(): void {

    this.service.getUser().subscribe({
      next:(data: any)=>{
        this.notificationData = data[0][1].notifications
        this.cartData = data[0][1].cart
        console.log(this.cartData.length)
      } ,
      error:(e:Error)=> console.log(e)
    })

  }



}
