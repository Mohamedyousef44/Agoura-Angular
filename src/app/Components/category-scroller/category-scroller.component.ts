import { Component } from '@angular/core';

@Component({
  selector: 'app-category-scroller',
  templateUrl: './category-scroller.component.html',
  styleUrls: ['./category-scroller.component.css'],
})
export class CategoryScrollerComponent {
  scroll(scroller: any, degree: number) {
    scroller.scrollLeft += degree;
  }
}
