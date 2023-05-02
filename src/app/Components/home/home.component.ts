import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isCart: any
  dataNot = [{'id':1 , 'message':'hi from agora'} , {'id':2 , 'message':'welcome user'} ]
  dataCart = [{'id':1 , 'product':'watch'} , {'id':2 , 'product':'belt'} ]


}
