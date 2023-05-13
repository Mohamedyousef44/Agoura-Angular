import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserHomeDataService } from 'src/app/Service/user-home-data.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor(public myService: UserHomeDataService){}

  ngOnInit() {
    this.myService.cartUpdated.subscribe((res) => {
      this.cartLen = res.apartments.length;
    });
    this.myService.notificationUpdated.subscribe((res) => {
      this.notLen = res.length;
    });
    this.myService.getData().subscribe({
      next:(data: any)=>{
        this.userName = data['userData'].name.split(" ")[0]
        this.isLoggedIn = localStorage.getItem('X-Auth-Token')
        console.log(data['userData'].name)
      }
    })
  }

  @Input("text-color") inputTextColor!:string;
  textColor!:string;
  element: any;
  @Output() toggle = new EventEmitter()
  @Input('cartLen') cartLen: any
  @Input('notLen') notLen: any
  userName: string = ''
  isLoggedIn: any

  check(data: any){
    this.element = data.target.parentElement
    if(this.element.id === 'cart'){
      this.toggle.emit(true)
    }else{
      this.toggle.emit(false)
    }
  }
}



