import { Directive, ElementRef, Renderer2, effect, input } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective {
  label = input<string>('');        // Signal input for button text
  icon = input<string | null>(null); // Signal input for icon filename

  constructor(private el: ElementRef, private renderer: Renderer2) {
    effect(() => {
      const native: HTMLElement = this.el.nativeElement;

      // Reset button content on every input change
      native.innerHTML = '';

      if (this.icon()) {
        const img = this.renderer.createElement('img');
        this.renderer.setAttribute(img, 'src', 'images/' + this.icon());
        this.renderer.setAttribute(img, 'alt', '');
        this.renderer.addClass(img, 'btn__icon');
        this.renderer.appendChild(native, img);
      }

      const span = this.renderer.createText(this.label());
      this.renderer.appendChild(native, span);
    });
  }
}
