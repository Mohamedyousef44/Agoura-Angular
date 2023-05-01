import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  @Input("text-color") inputTextColor!:string;
  textColor!:string;
  public constructor(){

  }
  ngOnInit(){
    console.log(this.inputTextColor)
    this.textColor=this.inputTextColor;
  }

}
