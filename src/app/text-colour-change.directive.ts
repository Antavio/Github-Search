import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextColourChange]'
})
export class TextColourChangeDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.textDecoration = "underline";
   }

}
