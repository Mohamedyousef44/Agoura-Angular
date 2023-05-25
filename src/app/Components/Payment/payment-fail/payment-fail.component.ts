import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-fail',
  templateUrl: './payment-fail.component.html',
  styleUrls: ['./payment-fail.component.css']
})
export class PaymentFailComponent {
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
