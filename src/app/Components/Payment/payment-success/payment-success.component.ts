import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent {
  timer=5;
  constructor(private router:Router){
    let interval=setInterval(()=>{
      if(this.timer==0){
        clearInterval(interval)
        this.router.navigateByUrl("/home")

      }
      --this.timer;
    },1000)
  }

}
