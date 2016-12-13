import { Directive, HostListener, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
    selector: '[scrollChange]'
})
export class ScrollDirective {

    @Output() onScrollChange: EventEmitter<number> = new EventEmitter<number>();

    constructor(private el: ElementRef) {
    }

    @HostListener('scroll') onScroll() {
        this.onScrollChange.emit(document.documentElement.scrollTop);
    }
}