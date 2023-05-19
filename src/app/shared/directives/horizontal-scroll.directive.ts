import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHorizontalScroll]',
  standalone: true,
})
export class HorizontalScrollDirective {

  constructor(private element: ElementRef) {}

  @HostListener('wheel', ['$event'])
  public onScroll(event: WheelEvent) {
    this.element.nativeElement.scrollLeft += event.deltaY;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.disableVerticalScroll();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.enableVerticalScroll();
  }

  private disableVerticalScroll() {
    document.body.style.overflowY = 'hidden';
    this.element.nativeElement.style.overflowX = 'auto';
  }

  private enableVerticalScroll() {
    document.body.style.overflowY = 'auto';
    this.element.nativeElement.style.overflowX = 'hidden';
  }
}
