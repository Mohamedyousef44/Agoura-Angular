import {  Input,Component } from '@angular/core';

@Component({
  selector: 'app-mytoast',
  templateUrl: './mytoast.component.html',
  styleUrls: ['./mytoast.component.css'],

})
export class MytoastComponent  {
  @Input("visible") visible = false;
  @Input("title") title = '';
  @Input("success") success =true;

  position = 'top-end';
  

  
}