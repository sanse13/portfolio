import { Directive, ElementRef, input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextTransition]',
  standalone: true,
})
export class TextTransitionDirective implements OnInit {
  text = input.required<string>();
  speed = input<number>(25);

  private index = 0;
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.typeWriter();
  }

  typeWriter() {
    if (this.index < this.text().length) {
      this.elementRef.nativeElement.innerHTML += this.text().charAt(this.index);
      this.index++;
      setTimeout(() => this.typeWriter(), this.speed());
    } else {
      this.renderer.addClass(this.elementRef.nativeElement, 'finished');
    }
  }
}
