import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  @Input("text-color") textColor!:string;
  @Input("b-hover") borderHoverColor!:string;
  public constructor(){

  }
  ngOnInit(){
    console.log(this.textColor,this.borderHoverColor)

  }

}
