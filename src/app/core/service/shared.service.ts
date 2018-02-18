import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SharedApi} from '../data/api.data';
import {Observable} from 'rxjs/Observable';
import {ResponseData} from '../data/vo/response.data';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {AreaData} from '../data/vo/area.data';
import {Article} from '../data/vo/articles.data';

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
