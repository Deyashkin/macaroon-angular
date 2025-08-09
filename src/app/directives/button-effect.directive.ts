import { Directive, ElementRef, HostListener, Input, type OnInit } from '@angular/core';

@Directive({
  selector: '[buttonEffect]',
  standalone: true,
})

export class ButtonEffectDirective implements OnInit {
  @Input() defaultBgColor: string = 'linear-gradient(0deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  @Input() hoverBgColor: string = 'linear-gradient(0deg, rgb(156, 11, 42) 0%, rgb(255, 80, 103) 100%)';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.background = this.defaultBgColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.background = this.hoverBgColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.background = this.defaultBgColor;
  }
}
