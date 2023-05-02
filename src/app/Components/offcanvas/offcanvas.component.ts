import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css']
})
export class OffcanvasComponent {

  @Input('data') data: any
  @Input('isCart') toggle: any


}
