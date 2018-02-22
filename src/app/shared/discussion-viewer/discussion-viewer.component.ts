import {Component, Input, OnInit} from '@angular/core';
import {InsertParentDiscussion, ParentDiscussionInfo, QueryDiscussionComm} from '../../core/data/dto/discussion';
import {RfEditorOptions, TrendArgs, TrendNoticeType} from '../../core/data/app.data';
import {SharedService} from '../../core/service/shared.service';
import {PageComm} from '../../core/data/dto/page-comm.data';
import {PagedInfo} from '../../core/data/dto/paged-info.data';
declare var $:any;
@Component({
  selector: 'app-discussion-viewer',
  templateUrl: './discussion-viewer.component.html',
  styleUrls: ['./discussion-viewer.component.css']
})
export class DiscussionViewerComponent implements OnInit {
  /**
   * 编辑器配置
   */
  rfOption:RfEditorOptions;

  /**
   * 表情是否被打开
   */
  faceOpened:boolean;

  /**
   * 插入父级评论
   */
  parentDiscussion:InsertParentDiscussion;

  /**
   * 动态参数
   */
  @Input()
  trendArgs:TrendArgs;

  /**
   * 评论查询模型
   */
  pageComm:PageComm;

  /**
   * 分好页的评论数据
   */
  pagedDiscussion:PagedInfo<ParentDiscussionInfo[]>;

  /**
   * 评论数组
   */
  parentDiscussions:ParentDiscussionInfo[]=[];



  constructor(private sharedService:SharedService) {
    this.rfOption = new RfEditorOptions();
    this.rfOption.height=35;
    this.rfOption.heightMax=35;

  }
  ngOnInit(): void {
    this.initInsertParent();
    this.initQueryDiscussion();
    this.queryDiscussion();
  }


  /**
   * 评论排序后重新查询
   * @param sortBy
   */
  sortDiscussionBy(sortBy){
    this.pageComm.condition.sortBy = sortBy;
    this.queryDiscussion();
  }
  /**
   * 初始化评论查询参数
   */
  initQueryDiscussion(){
    this.pageComm = new PageComm();
    this.pageComm.page.size=100;
    let query = new QueryDiscussionComm();
    query.trendId = this.trendArgs.trendId;
    this.pageComm.condition = query;
  }

  /**
   * 查询评论
   */
  queryDiscussion(){
     this.sharedService.getParentDiscussion(this.pageComm).subscribe(res=>{
       this.pagedDiscussion = res.data;
       this.parentDiscussions = res.data.data;
     });
  }
  /**
   * 初始化插入父级评论数据
   */
  initInsertParent(){
    this.parentDiscussion = new InsertParentDiscussion();
    let notice =this.parentDiscussion.trendNotice;

    //初始化动态通知
    notice.trendContent = this.trendArgs.trendContent;
    notice.trendImg = this.trendArgs.firstTrendImg;
    notice.noticeUserId = this.trendArgs.trendUserId;
    notice.trendNoticeType = TrendNoticeType.DISCUSSION;
    notice.trendType = this.trendArgs.trendType;
    notice.trendId = this.trendArgs.trendId;
    //初始化评论
    this.parentDiscussion.parentDiscussion.trendId = this.trendArgs.trendId
  }

  /**
   * 发表评论
   */
  sendDiscussion(){
    this.sharedService.createParentDiscussion(this.parentDiscussion).subscribe(res=>{
      this.parentDiscussions = [res.data].concat(this.parentDiscussions);
      this.parentDiscussion.parentDiscussion.content="";
    });
  }
  /**
   * 表情追加
   * @param {string} face
   */
  appendFace(face:string){
    this.parentDiscussion.parentDiscussion.content += face;
  }
  /**
   * 表情切换
   */
  toggleFace(){
    this.faceOpened = !this.faceOpened;
  }
  ngAfterViewInit(){
    $('.fr-box a').remove();
  }
}
