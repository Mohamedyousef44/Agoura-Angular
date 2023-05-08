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
  }
  ngOnInit(): void {

    this.service.getData().subscribe({
      next:(data: any)=>{
        this.notificationData = data["notifications"]
        this.cartData = data["carts"][0].apartments
        console.log(this.cartData)
      } ,
      error:(e:Error)=> console.log(e)
    })

  }



}
