import { Directive, HostListener, ElementRef } from "@angular/core";

@Directive({
  selector: "[appInputFormat]"
})
export class InputFormatDirective {
  constructor(private e: ElementRef) {}

  @HostListener("blur") onBlur() {
    let value: String = this.e.nativeElement.value;
    this.e.nativeElement.value = value.toLowerCase();
  }
}
