import { Injectable } from '@angular/core';
import {TitleUserInfo, User} from '../data/vo/user.data';
import {HttpClient} from '@angular/common/http';
import {ResponseData} from '../data/vo/response.data';
import {SharedApi} from '../data/api.data';
import {Observable} from 'rxjs/Observable';

/**
 * 主页服务
 */
@Injectable()
export class HomeService {

  /**
   * 标题用户信息
   */
  titleUser:TitleUserInfo;

  constructor(private http:HttpClient,private sharedApi:SharedApi) {
    this.titleUser = new TitleUserInfo();
  }

  /**
   * 获取主页标题用户信息
   */
  getTitleUserInfo(){
   return this.http.get<ResponseData<TitleUserInfo>>(this.sharedApi.titleUserInfoPath).map(res=>{
      this.titleUser = res.data;
    });
  }

}
