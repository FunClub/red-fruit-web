import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageComm} from '../../core/data/dto/page-comm.data';

@Component({
  selector: 'app-page-loading',
  templateUrl: './page-loading.component.html',
  styleUrls: ['./page-loading.component.css']
})
export class PageLoadingComponent implements OnInit {
  @Output()
  pageAble:EventEmitter<> = new EventEmitter<>();

  @Input()
  hasNext:boolean;
  constructor() { }

  ngOnInit() {
  }
  pageAbleEvent(){
    this.pageAble.emit();
  }
}
