import { Component, OnInit, SimpleChange } from '@angular/core';
import { UserHomeDataService } from 'src/app/Service/user-home-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
      } ,
      error:(e:Error)=> console.log(e)
    })

  }




}
