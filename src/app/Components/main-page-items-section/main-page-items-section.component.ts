import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserHomeDataService } from 'src/app/Service/user-home-data.service';


@Component({

  selector: 'app-main-page-items-section',
  templateUrl: './main-page-items-section.component.html',
  styleUrls: ['./main-page-items-section.component.css']

})
export class MainPageItemsSectionComponent {

  items:any;
  addedCart = false

  constructor(public myService:UserHomeDataService , private spinner: NgxSpinnerService){}

  ngOnInit(): void {
    this.spinner.show('homeSpinner')
    this.myService.getData().subscribe(
      {
        next:(data: any)=>{
          this.items = data['apartments'];
          this.spinner.hide('homeSpinner')
        },
        error:(err: any)=>{console.log(err)}
      }
      )
  }

  toggle(id: any , event: any){
    const button = event.target

    if(!this.addedCart){
      this.addToCart(id)
      button.classList.remove('cart-btn-add')
      button.classList.add('cart-btn-remove')
      button.removeEventListener('click', this.addToCart)
      button.addEventListener('click', this.removeFromCart)
      this.addedCart = true
    }else{
      this.removeFromCart(id)
      button.classList.remove('cart-btn-remove')
      button.classList.add('cart-btn-add')
      button.removeEventListener('click', this.removeFromCart)
      button.addEventListener('click', this.addToCart)
      this.addedCart = false
    }
  }
  addToCart(id: any){
    this.myService.addItemToCart(id)
  }
  removeFromCart(id: any){
    this.myService.deleteProductFromCart(id)
  }
}
