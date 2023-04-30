import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-lower',
  templateUrl: './footer-lower.component.html',
  styleUrls: ['./footer-lower.component.css']
})
export class FooterLowerComponent {
  @Input('text') text: any
}
