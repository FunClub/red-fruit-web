import { Component, OnInit } from '@angular/core';
import {PageComm} from '../../../core/data/dto/page-comm.data';
import {MessageService} from '../../../core/service/message.service';
import {TrendNotice} from '../../../core/data/dto/trend-notice.data';
import {PagedInfo} from '../../../core/data/dto/paged-info.data';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  /**
   * 消息类型
   * @type {string}
   */
  messageType:string = "trend";
  /**
   * 分页命令
   */
  pageComm:PageComm;

  /**
   * 搜索是否被锁定
   */
  searchLocked:boolean;

  /**
   * 动态通知数组
   */
  trendNotices:TrendNotice[]=[];

  /**
   * 分好页的动态通知数据
   */
  pageInfo:PagedInfo<TrendNotice[]>;

  constructor(private messageService:MessageService) { }

  ngOnInit() {
    this.pageComm = new PageComm();
    this.searchTrendNotice();
  }

  searchTrendNotice(){
    this.searchLocked = true;
    this.messageService.selectTrendNotice(this.pageComm).subscribe(res=>{
      this.pageInfo = res.data;
      this.trendNotices = this.trendNotices.concat(this.pageInfo.data);
    })
  }

}
