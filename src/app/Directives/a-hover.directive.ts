import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAHover]'
})
export class AHoverDirective {

  @Input('appAHover') className: any

  @HostListener('mouseover') onMouseOver(){
    this.render.addClass(this.el.nativeElement , this.className)
  }
  @HostListener('mouseover') onMouseOut(){
    this.render.removeClass(this.el.nativeElement , this.className)
  }

  constructor(private el: ElementRef , private render: Renderer2) {

  }

}
