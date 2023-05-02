import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  @Input("text-color") inputTextColor!:string;
  textColor!:string;
  element: any;
  @Output() fromNav = new EventEmitter()

  ngOnInit(){
    console.log(this.inputTextColor)
    this.textColor=this.inputTextColor;
  }

  check(data: any){
    this.element = data.target.parentElement
    if(this.element.id === 'cart'){
      this.fromNav.emit(true)
    }else{
      this.fromNav.emit(false)
    }
  }

}



