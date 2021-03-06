import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page-loading',
  templateUrl: './page-loading.component.html',
  styleUrls: ['./page-loading.component.css']
})
export class PageLoadingComponent implements OnInit {
  @Output()
  pageAble:EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  hasNext:boolean;
  constructor() { }

  ngOnInit() {
  }
  pageAbleEvent(){
    this.pageAble.emit();
  }
}
