import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import {RfEditorOptions, TrendArgs, TrendNoticeType, TrendType} from '../../core/data/app.data';
import {Subscription} from 'rxjs/Subscription';
import {InsertSubDiscussion, ReplyDiscussionArgs, SubDiscussion, SubDiscussionInfo} from '../../core/data/dto/discussion';
import {SharedService} from '../../core/service/shared.service';

declare var $:any;
@Component({
  selector: 'app-reply-discussion',
  templateUrl: './reply-discussion.component.html',
  styleUrls: ['./reply-discussion.component.css'],
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
export class ReplyDiscussionComponent implements OnInit {
  /**
   * 是否打开表情
   * @type {boolean}
   */
  faceOpened=false;

  /**
   * 编辑器配置
   */
  rfOptions:RfEditorOptions;

  /**
   * 发送子评论订阅
   */
  sendSubDiscussionSubscribe:Subscription;

  /**
   * 动态操作参数
   */
  @Input()
  trendArgs:TrendArgs;

  /**
   * 回复评论参数
   */
  @Input()
  replyDiscussionArgs:ReplyDiscussionArgs;

  /**
   * 子评论数组，用于回复后及时显示
   */
  @Input()
   subDiscussions:SubDiscussionInfo[];
  /**
   * 插入评论模型
   */
  subDiscussion:InsertSubDiscussion;

  constructor(private shareService:SharedService) {
    this.rfOptions = new RfEditorOptions();
    this.subDiscussion = new InsertSubDiscussion();
  }

  ngOnInit() {
    this.initEditor();
    this.initSubDiscussion();
  }

  /**
   * 插入子评论
   */
  insertSubDiscussion(){
    this.replyDiscussionArgs.showReply=false;

     this.shareService.insertSubDiscussion(this.subDiscussion).subscribe(res=>{
       this.subDiscussions.push(res.data);

     })
  }
  /**
   * 初始化编辑器
   */
  initEditor(){
    this.rfOptions.height=35;
    this.rfOptions.placeholderText = "回复：@"+this.replyDiscussionArgs.discussedNickname;
  }

  /**
   * 初始化子评论和通知参数
   */
  initSubDiscussion(){
    //初始化子评论
    this.subDiscussion.subDiscussion.parentDiscussionId = this.replyDiscussionArgs.parentDiscussionId;
    this.subDiscussion.subDiscussion.discussedUserId = this.replyDiscussionArgs.discussedUserId;

    //初始化通知参数
    this.subDiscussion.trendNotice.trendId = this.trendArgs.trendId;
    this.subDiscussion.trendNotice.trendType = TrendType.DISCUSSION;
    this.subDiscussion.trendNotice.trendNoticeType = TrendNoticeType.REPLY;
    this.subDiscussion.trendNotice.noticeUserId = this.replyDiscussionArgs.discussedUserId;
    this.subDiscussion.trendNotice.trendImg = this.trendArgs.firstTrendImg;
    this.subDiscussion.trendNotice.trendContent = this.trendArgs.trendContent;
    this.subDiscussion.trendNotice.discussionId= this.replyDiscussionArgs.parentDiscussionId;
  }
  /**
   * 切换表情
   */
  toggleFace(){
    this.faceOpened=!this.faceOpened;
  }

  /**
   * 追加表情到编辑器
   * @param discussionEditor
   * @param faceImg 表情html
   */
  appendFace(discussionEditor:any,faceImg:string){
    this.subDiscussion.subDiscussion.content+=faceImg;
    this.faceOpened=false;
  }

  /**
   * 关闭表情
   */
  closeFace(){
    this.faceOpened=false;
  }

  ngAfterViewInit(){
    $('.fr-box a').remove();
  }
}
