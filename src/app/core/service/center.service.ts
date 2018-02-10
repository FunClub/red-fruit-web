import { Injectable } from '@angular/core';
import {CenterApi} from '../data/api.data';
import {HttpClient} from '@angular/common/http';
import {ResponseData} from '../data/vo/response.data';
import {CenterInfo} from '../data/dto/user.data';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CenterService {

  constructor(private centerApi:CenterApi,private http:HttpClient) { }

  /**
   * 获取用户中心信息
   * @param {string} centerUserId 用户中心用户id
   * @returns {Observable<ResponseData<CenterInfo>>}
   */
  getCenterInfo(centerUserId:string):Observable<ResponseData<CenterInfo>>{
    return this.http.get<ResponseData<CenterInfo>>(this.centerApi.getCenterPath(centerUserId));
  }
}
