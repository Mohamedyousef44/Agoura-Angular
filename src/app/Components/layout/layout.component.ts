import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/Service/toast-service.service';
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
  toastMessage!: string;
  toastVisible=false;
  toastSuccess!:boolean;
  constructor(private service: UserHomeDataService,private toastService: ToastService){
  }
  ngOnInit(): void {

    this.service.getData().subscribe({
      next:(data: any)=>{
        console.log(data["carts"].length)
        this.notificationData = data["notifications"]
        if(data["carts"].length > 0) this.cartData = data["carts"][0].apartments
        else this.cartData = null

      } ,
      error:(e:Error)=> console.log(e)
    })
    this.toastService.toastEvent.subscribe((data:any) => {
      data=JSON.parse(data)
      this.toastMessage = data.message;
      this.toastSuccess=data.success;
      console.log(this.toastMessage)
      this.show()
    });
  }
  
  show(){
    if(this.toastMessage.length==0){
      return
    }
    this.toastVisible=true
      setTimeout(()=>{
        this.toastVisible=false
        this.toastMessage=""
      },5000)
    }
}
  


