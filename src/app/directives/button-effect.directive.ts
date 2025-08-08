import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[buttonEffect]',
  standalone: true,
})
export class ButtonEffectDirective {
  @Input() defaultBgColor: string = '#71081e';
  @Input() hoverBgColor: string = '#d7485c';

  constructor(private el: ElementRef, private r: Renderer2) {}

  ngOnInit() {
    this.r.setStyle(this.el.nativeElement, 'background-color', this.defaultBgColor);
  }

  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.el.nativeElement, 'background-color', this.hoverBgColor);
  }

  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'background-color', this.defaultBgColor);
  }
}
