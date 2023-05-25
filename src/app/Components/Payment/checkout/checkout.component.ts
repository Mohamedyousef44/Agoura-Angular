import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private http:CheckoutService,private route:ActivatedRoute){
    this.id=this.route.snapshot.params['id'];
  }
  ngOnInit(): void {
    // for the aside info subtotal, taxes and total values 
    console.log(this.id)
    this.http.getOrderDetails(this.id).subscribe({
      next:(res:any)=>{
        console.log("hamada")
        this.data=res.data

        console.log(res)
      }

    })
  }

}
