import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {animate, keyframes,style, transition, trigger} from "@angular/animations";
import {TrendNotice, TrendNoticeInfo} from '../../../../core/data/dto/trend-notice.data';
import {ParentDiscussionInfo} from '../../../../core/data/dto/discussion';
@Component({
  selector: 'app-trend-notice',
  templateUrl: './trend-notice.component.html',
  styleUrls: ['./trend-notice.component.css'],
  animations:[
    trigger('flyXInOutFromTop', [
      transition('void => *', [
        animate("300ms",keyframes([
          style({opacity: 0, transform: 'translateY(-5%)', offset: 0}),
          style({opacity: 0.5, transform: 'translateY(5px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate("300ms",keyframes([
          style({opacity: 1, transform: 'translateY(0)'}),
          style({opacity: 0.5, transform: 'translateY(5px)'}),
          style({opacity: 0, transform: 'translateY(-5%)'})
        ]))
      ])
    ]),
  ]
})
export class TrendNoticeComponent implements OnInit {

  /**
   * 删除动态通知时间
   * @type {EventEmitter<number>}number代表通知动态索引
   */
  @Output()
  refreshNoticeArt = new EventEmitter<number>();

  /**
   * 本动态通知所在父组件的索引，用于删除本组件
   */
  @Input()
  noticeArtIndex:number;

  /**
   * 动态通知
   */
  @Input()
  trendNotice:TrendNoticeInfo;

  /**
   * 父级评论
   */
  parentDiscussion:ParentDiscussionInfo;


  /**
   * 是否显示用户card
   */
  showCard:boolean;


  constructor() {
    this.showCard=false;
  }

  ngOnInit() {
    this.parentDiscussion = this.trendNotice.parentDiscussionInfo;
  }
  initArtArgs(){

  }


  /**
   * 删除动态通知
   */
  deleteNotice(){


  }

  /**
   * 刷新通知动态
   * @param subDiscussion 子评论
   * @param reply 是否显示回复
   */
  refreshDiscussion(){

  }

  /**
   * 切换回复编辑器
   * @param reply
   */
  toggleReply(reply:any){
    reply.showReply=! reply.showReply;
  }
}
