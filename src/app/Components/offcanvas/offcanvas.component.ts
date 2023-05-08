import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserHomeDataService } from 'src/app/Service/user-home-data.service';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css']
})
export class OffcanvasComponent {

  constructor(private service: UserHomeDataService , private route: Router){}

  @Input('data') data: any
  @Input('isCart') toggle: any

  deleteItem(id: any){

    console.log(id)

    this.toggle ? this.service.deleteProductFromCart(id) : this.service.deleteNotification(id)
    this.route.navigate(['/home'])
  }

}
