import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../../core/service/message.service';
import {PageComm} from '../../../core/data/dto/page-comm.data';

@Component({
  selector: 'app-trend-recommend',
  templateUrl: './trend-recommend.component.html',
  styleUrls: ['./trend-recommend.component.css']
})
export class TrendRecommendComponent implements OnInit {

  /**
   * 分页命令
   */
  pageComm:PageComm;
  constructor() { }

  ngOnInit() {


  }

}
