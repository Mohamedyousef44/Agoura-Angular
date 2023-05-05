import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-up-to-top',
  templateUrl: './up-to-top.component.html',
  styleUrls: ['./up-to-top.component.css']
})
export class UpToTopComponent {

  showBtn = false

  @Input('position') style: any

  @HostListener('window:scroll', [])

  onWindowScroll(){

    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if(scrollTop > 400) {
      this.showBtn = true
    }else {
      this.showBtn = false
    }
  }

  toUp(){
    window.scroll({
      top:0,
      behavior: 'smooth'
    })
  }

}
