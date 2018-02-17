import {Directive, ElementRef, EventEmitter, Output} from '@angular/core';

@Directive({
  selector: '[appScrollPage]'
})
export class ScrollPageDirective {
  @Output()
  pageAble:EventEmitter<> = new EventEmitter<>();
  constructor(private ele:ElementRef) {
    window.onscroll=(ev)=>{
      if(window.innerHeight -ele.nativeElement.getBoundingClientRect().top>-10){
        this.pageAble.emit();
      }

    }
  }

}
