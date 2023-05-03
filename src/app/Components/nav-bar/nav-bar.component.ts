import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  @Input("text-color") inputTextColor!:string;
  textColor!:string;
  element: any;
  @Output() toggle = new EventEmitter()
  @Input('cartLen') cartLen: any
  @Input('notLen') notLen: any


  check(data: any){
    this.element = data.target.parentElement
    if(this.element.id === 'cart'){
      this.toggle.emit(true)
    }else{
      this.toggle.emit(false)
    }
  }
}



