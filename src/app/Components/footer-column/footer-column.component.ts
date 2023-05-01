import { AfterViewInit, Component, Input, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-footer-column',
  templateUrl: './footer-column.component.html',
  styleUrls: ['./footer-column.component.css']
})
export class FooterColumnComponent {

  @Input('headline') text: any

}
