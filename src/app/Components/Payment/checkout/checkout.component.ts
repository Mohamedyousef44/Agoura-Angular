import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutService } from 'src/app/Service/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styles: [
  ]
})
export class CheckoutComponent implements OnInit {
  
  data:any;
  id:any;

  constructor(private http:CheckoutService,private checkoutService:CheckoutService,private route:ActivatedRoute,private router:Router){
    this.id=this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    // for the aside info subtotal, taxes and total values 
    console.log(this.id)
    this.http.getOrderDetails(this.id).subscribe({
      next:(res:any)=>{
        console.log(res.data)
        this.data=res.data
        console.log(res)
      }

    })
  }
  submit(){
    this.checkoutService.checkout(this.id,this.data).subscribe({
      next:(res:any)=>{
        console.log(res)
        window.location=res.url
      },
      error:()=>{
      }
    })
  }

}
