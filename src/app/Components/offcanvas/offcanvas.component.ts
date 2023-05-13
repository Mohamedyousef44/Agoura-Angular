import { Component, Input } from '@angular/core';
import { UserHomeDataService } from 'src/app/Service/user-home-data.service';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css']
})
export class OffcanvasComponent {
  notificationData: any;
  cartData: any;
  cartError = false

  constructor(private service: UserHomeDataService){}

  @Input('isCart') toggle: any

  ngOnInit() {
    this.service.cartUpdated.subscribe((res) => {
      this.cartData = res.apartments;
    });

    this.service.cartError.subscribe((res) => {
      this.cartError = res
    });

    this.service.notificationUpdated.subscribe((res) => {
      this.notificationData = res;
    });

    this.service.getData().subscribe({
      next:(data: any)=>{
        this.notificationData = data["notifications"]
        if(data["carts"].length > 0) this.cartData = data["carts"][0].apartments
        else this.cartData = null
      } ,
      error:(e:Error)=> console.log(e)
    })
  }

  deleteItem(id: any){
    this.toggle ? this.service.deleteProductFromCart(id) : this.service.deleteNotification(id)
  }


}
