import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserHomeDataService } from 'src/app/Service/user-home-data.service';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css']
})
export class OffcanvasComponent {
  notificationData: any;
  cartData: any;

  constructor(private service: UserHomeDataService , private route: Router){}

  @Input('data') data: any
  @Input('isCart') toggle: any



  ngOnInit() {
    this.service.cartUpdated.subscribe((res) => {
      this.cartData = res.apartments;
    });
    this.service.getData().subscribe({
      next:(data: any)=>{
        this.notificationData = data["notifications"]
        this.cartData = data["carts"][0].apartments
        console.log(this.cartData)
      } ,
      error:(e:Error)=> console.log(e)
    })
  }

  deleteItem(id: any){

    console.log(id)

    this.toggle ? this.service.deleteProductFromCart(id) : this.service.deleteNotification(id)
    this.route.navigate(['/home'])
  }

}
