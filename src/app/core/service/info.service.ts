import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfoApi} from '../data/api.data';
import {ResponseData} from '../data/vo/response.data';
import {AllUserInfo, User} from '../data/vo/user.data';
import {Observable} from 'rxjs/Observable';

/**
 * 用户资料服务
 */
@Injectable()
export class InfoService {

  constructor(private http:HttpClient,private api:InfoApi) { }

  /**
   * 更新用户信息
   *
   * @param user 用户
   * @return 成功与否
   */
  updateUserInfo(user:User):Observable<ResponseData<boolean>>{
    return this.http.put<ResponseData<boolean>>(this.api.updateUserInfoPath,user);
  }
  /**
   * 获取用户的全部信息
   *
   * @param userId 用户id
   * @return 用户的全部信息
   */
  getAllUserInfo(userId:string):Observable<ResponseData<AllUserInfo>>{
    return this.http.get<ResponseData<AllUserInfo>>(this.api.getAllUserInfoPath(userId));
  }
}