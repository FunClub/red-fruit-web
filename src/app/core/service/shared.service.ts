import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SharedApi} from '../data/api.data';
import {Observable} from 'rxjs/Observable';
import {ResponseData} from '../data/dto/response.data';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {AreaData} from '../data/dto/area.data';
import {Article} from '../data/dto/articles.data';
import {PagedInfo} from '../data/dto/paged-info.data';
import {ParentDiscussionInfo, ReplyDiscussionArgs, SubDiscussionInfo} from '../data/dto/discussion';
import {TrendNotice} from '../data/dto/trend-notice.data';

/**
 * 共享服务
 */
@Injectable()
export class SharedService{

  /**
   * 登录和注册标题
   */
  indexTitle:string;

  constructor(private http:HttpClient,private api:SharedApi
  ) {

  }

  /**
   *  删除点赞
   * @returns {Observable<ResponseData<boolean>>}
   */
  deleteThumb(targetId:string):Observable<ResponseData<boolean>>{
    return this.http.delete<ResponseData<boolean>>(this.api.getThumbPath(targetId));
  }

  /**
   * 插入点赞
   * @param {TrendNotice} trendNotice 点赞通知
   * @returns {Observable<ResponseData<boolean>>}
   */
  insertThumb(trendNotice:TrendNotice):Observable<ResponseData<boolean>>{
    return this.http.post<ResponseData<boolean>>(this.api.thumbPath,trendNotice);
  }
  /**
   * 插入子级评论
   * @param discussion
   */
  insertSubDiscussion(discussion):Observable<ResponseData<SubDiscussionInfo>>{
    return this.http.post<ResponseData<SubDiscussionInfo>>(this.api.createSubDiscussionPath,discussion).map((res:ResponseData<SubDiscussionInfo>)=>{
      let subDiscussion = res.data;
      this.initReplyDiscussionArgs(subDiscussion);
      return res;
    });
  }
  /**
   * 查询父级评论
   * @param comm 查询评论
   * @return 分页的父级评论
   */
  getParentDiscussion(comm):Observable<ResponseData<PagedInfo<ParentDiscussionInfo[]>>>{
    return this.http.patch<ResponseData<PagedInfo<ParentDiscussionInfo[]>>>(this.api.selectParentDiscussionPath,comm).map((res:ResponseData<PagedInfo<ParentDiscussionInfo[]>>)=>{
      //组装评论操作参数
      let parentDiscussions = res.data.data;
      for (let pDiscussion of parentDiscussions){
         this.initParentDiscussion(pDiscussion);
      }
      return res;
    });
  }

  //初始化评论参数
  initParentDiscussion(pDiscussion:ParentDiscussionInfo){
    this.initReplyDiscussionArgs(pDiscussion);
    let subDiscussions = pDiscussion.subDiscussionInfos;
    if(subDiscussions!=null&&subDiscussions.length>0){
      for (let sDiscussion of subDiscussions){
        this.initReplyDiscussionArgs(sDiscussion);
      }
    }
  }
  /**
   * 初始化回复参数
   * @param discussion
   */
  initReplyDiscussionArgs(discussion){
    let replyDiscussionArgs= new ReplyDiscussionArgs();
    if(discussion.userShortInfo){//回复父评论
      replyDiscussionArgs.discussedNickname = discussion.userShortInfo.nickname;
    }else {//回复子评论
      replyDiscussionArgs.discussedNickname = discussion.nickname;
      replyDiscussionArgs.discussedUserId = discussion.userId;
    }
    replyDiscussionArgs.parentDiscussionId = discussion.parentDiscussionId;
    discussion.replyDiscussionArgs = replyDiscussionArgs
  }
  /**
   * 添加父评论
   * @param discussion 父级
   * @return 父级评论信息
   */
  createParentDiscussion(discussion):Observable<ResponseData<ParentDiscussionInfo>>{
    return this.http.post<ResponseData<ParentDiscussionInfo>>(this.api.createParentDiscussionPath,discussion).map(res=>{
      let discussion = res.data;
      discussion.subDiscussionInfos=[];
      this.initReplyDiscussionArgs(discussion);
      return res;
    });
  }
  /**
   * 获取文章列表
   * @param channelId 频道ID
   * @param startIndex 文章开始索引
   * @param amountOfArticle  文章数量
   * @return 文章集合
   */
  getArticles(channelId:string,startIndex:string,amountOfArticle:string):Observable<ResponseData<Article[]>>{
    return this.http.get<ResponseData<Article[]>>(this.api.getArticlesPath(channelId,startIndex,amountOfArticle));
  }
  /**
   * 删除文件
   * @param {string[]} filePaths
   * @returns {Observable<ResponseData<boolean>>}
   */
  delete(filePaths:string[]):Observable<ResponseData<boolean>>{

    return this.http.patch<ResponseData<boolean>>(this.api.deletePath,filePaths);
  }
  /**
   * 上传文件并生成路径
   * @param data 文件数据
   * @param folder 上传的文件夹
   * @return 路径
   */
  upload(folder:string,data:FormData):Observable<ResponseData<string[]>>{
    return this.http.post<ResponseData<string[]>>(this.api.getUploadPath(folder),data);
  }

  /**
   * 获取父级区域集合
   * @param leave 行政区域等级（0: 省级 1:市级 2:县级 3:镇级 4:乡村级）
   * @param pageNumber 页码，从1开始
   * @param pageSize 每页区域数
   */
  getParentArea(leave:string,pageNumber:string,pageSize:string):Observable<ResponseData<Array<AreaData>>>{
    return this.http.get<ResponseData<Array<AreaData>>>(this.api.getParentAreaPath(leave,pageNumber,pageSize));
  }

  /**
   * 获取指定id的子级区域集合
   * @param parentAreaString 父级区域id+short_name
   */
  getSubArea(parentAreaString:string):Observable<ResponseData<Array<AreaData>>>{
    return this.http.get<ResponseData<Array<AreaData>>>(this.api.getSubAreaPath(this.splitSubArea(parentAreaString)));
  }

  /**
   * 拆分子区域字符串
   * @param {string} parentAreaString 父级区域id+short_name
   * @returns {string} 父级区域id
   */
  splitSubArea(parentAreaString:string):string{
    return parentAreaString.split('-',1)[0];
  }

  /**
   * 返回顶端
   */
  toTop(){
    window.scrollTo(0,0);
  }

}
