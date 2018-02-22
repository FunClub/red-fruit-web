import {Component, Input, OnInit} from '@angular/core';
import {TrendArgs, TrendNoticeType} from '../../core/data/app.data';
import {TrendNotice} from '../../core/data/dto/trend-notice.data';
import {SharedService} from '../../core/service/shared.service';



@Component({
  selector: 'app-trend-operation',
  templateUrl: './trend-operation.component.html',
  styleUrls: ['./trend-operation.component.css'],

})
export class TrendOperationComponent implements OnInit {
  /**
   * 动态操作参数
   */
  @Input()
  trendArgs:TrendArgs;

  /**
   * 通知动态
   */
  trendNotice:TrendNotice;

  constructor(private shareService:SharedService){

  }
  ngOnInit(): void {
    this.initTrendNotice();
  }

  /**
   * 初始化动态通知
   */
  initTrendNotice(){
    this.trendNotice = new TrendNotice();
    this.trendNotice.trendId = this.trendArgs.trendId;
    this.trendNotice.trendContent = this.trendArgs.trendContent;
    this.trendNotice.trendImg = this.trendArgs.firstTrendImg;
    this.trendNotice.noticeUserId = this.trendArgs.trendUserId;
    this.trendNotice.trendNoticeType = TrendNoticeType.THUMB;
    this.trendNotice.trendType = this.trendArgs.trendType;
  }

  /**
   * 点赞和取消赞
   */
  thumb(){
    //点赞
    if(this.trendArgs.thumbsUpAble){
      this.shareService.insertThumb(this.trendNotice).subscribe(res=>{
        if(res.data){
          this.trendArgs.thumbsUpAble=false;
          this.trendArgs.thumbsUpCount++;
        }
      })
    }else{//取消赞
      this.shareService.deleteThumb(this.trendArgs.trendId).subscribe(res=>{
        this.trendArgs.thumbsUpAble=true;
        this.trendArgs.thumbsUpCount--;
      })
    }

  }

}
