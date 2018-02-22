import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageApi} from '../data/api.data';
import {PageComm} from '../data/dto/page-comm.data';
import {ResponseData} from '../data/dto/response.data';
import {PagedInfo} from '../data/dto/paged-info.data';
import {TrendNoticeInfo} from '../data/dto/trend-notice.data';
import {Observable} from 'rxjs/Observable';
import {SharedService} from './shared.service';
import {TrendArgs, TrendType} from '../data/app.data';
import {MoodInfo} from '../data/dto/mood.data';

/**
 * 消息服务
 */
@Injectable()
export class MessageService {

  constructor(private http:HttpClient,private api:MessageApi,private shareService:SharedService) {

  }

  /**
   *
   * @param {PageComm} pageComm
   * @returns {Observable<ResponseData<PagedInfo<TrendNoticeInfo[]>>>}
   */
  selectTrendNotice(pageComm:PageComm):Observable<ResponseData<PagedInfo<TrendNoticeInfo[]>>>{
    return this.http.post<ResponseData<PagedInfo<TrendNoticeInfo[]>>>(this.api.selectTrendNoticePath,pageComm).map((res:ResponseData<PagedInfo<TrendNoticeInfo[]>>)=>{
      /**
       * 初始化评论参数
       * @type {TrendNoticeInfo[]}
       */
      let trendNotices = res.data.data;
      for (let notice of trendNotices){
        if(notice.parentDiscussionInfo){
          this.shareService.initParentDiscussion(notice.parentDiscussionInfo);
        }
        this.initTrendArgs(notice);
      }
      return res;
    });
  }
  /**
   * /初始化动态操作参数
   * @param {TrendNoticeInfo} notice
   */
  initTrendArgs(notice: TrendNoticeInfo) {
    let args = new TrendArgs();
    args.trendId = notice.trendImg;
    args.trendType = notice.trendType;
    args.trendUserId = notice.noticeUserId;
    notice.trendArgs = args;
  }
}
