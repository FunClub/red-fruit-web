import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BusinessSharedApi} from '../data/api.data';
import {Observable} from 'rxjs/Observable';
import {ResponseData} from '../data/response.data';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {AreaData} from '../data/area.data';

/**
 * 区域服务
 */
@Injectable()
export class AreaService{
  constructor(private http:HttpClient,private api:BusinessSharedApi
  ) {

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

}
