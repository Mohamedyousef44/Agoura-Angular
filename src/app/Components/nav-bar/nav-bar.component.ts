import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserHomeDataService } from 'src/app/Service/user-home-data.service';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { AuthService } from 'src/app/Service/auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]

})
export class NavBarComponent implements OnInit {
  cartLen: any;
  notLen: any;
  userId: any;
  profileImage:any;
  isAdmin=false;
  constructor(public myService: UserHomeDataService ,private authService:AuthService) {
    
  }

  ngOnInit() {
    this.myService.cartUpdated.subscribe((res) => {
      this.cartLen = res.apartments.length;
    });
    this.myService.notificationUpdated.subscribe((res) => {
      this.notLen = res.length;
    });
    this.myService.getData().subscribe({
      next:(data: any)=>{
        this.userId = data['userData']._id
        this.userName = data['userData'].name.split(" ")[0]
        this.isLoggedIn = localStorage.getItem('X-Auth-Token')
        this.notLen = data['notifications'].length
        this.cartLen =data['carts'].length>0? data['carts'][0]['apartments'].length:this.cartLen
        this.profileImage = data['userData'].image || "/assets/photos/avatar02.png"
      }
    })
    this.isAdmin=this.authService.verify();

  }

  @Input("text-color") inputTextColor!:string;
  textColor!:string;
  element: any;
  @Output() toggle = new EventEmitter()
  userName: string = ' '
  isLoggedIn: any

  check(data: any){
    this.element = data.target.parentElement
    if(this.element.id === 'cart'){
      this.toggle.emit(true)
    }else{
      this.toggle.emit(false)
    }
  }

  logout(){
    localStorage.removeItem('X-Auth-Token')
  }
}



