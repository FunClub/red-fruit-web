import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

import {animate, keyframes,style, transition, trigger} from "@angular/animations";
import {ParentDiscussionInfo, ReplyDiscussionArgs} from '../../core/data/discussion/discussion';
import {TrendArgs} from '../../core/data/app.data';

declare let $:any;
@Component({
  selector: 'app-trend-discussion',
  templateUrl: './trend-discussion.component.html',
  styleUrls: ['./trend-discussion.component.css'],
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
export class TrendDiscussionComponent{

  /**
   * 父级评论
   */
  @Input()
  parentDiscussion:ParentDiscussionInfo;

  /**
   * 动态操作参数
   */
  @Input()
  trendArgs:TrendArgs;

  /**
   * 回复切换显示
   */
  toggleShowReply(){
    this.parentDiscussion.replyDiscussionArgs.showReply = !this.parentDiscussion.replyDiscussionArgs.showReply;
  }

  /**
   * 子级评论回复切换显示
   */
  toggleSubReply(args:ReplyDiscussionArgs){
    args.showReply = ! args.showReply;
  }
}
