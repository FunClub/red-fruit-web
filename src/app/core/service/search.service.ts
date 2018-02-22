import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SearchApi} from '../data/api.data';
import {Observable} from 'rxjs/Observable';
import {SearchedUserInfo, UserCriterionInfo} from '../data/dto/user.data';
import {ResponseData} from '../data/dto/response.data';
import {PageComm} from '../data/dto/page-comm.data';
import {PagedInfo} from '../data/dto/paged-info.data';

/**
 * 搜索服务
 */
@Injectable()
export class SearchService {

  constructor(private http:HttpClient,private api:SearchApi) {

  }
  /**
   * 根据条件分页查询用户
   * @param pageComm 查询条件条件
   * @return 已分页的用户信息
   */
  getSearchedUserInfo(pageComm:PageComm):Observable<ResponseData<PagedInfo<SearchedUserInfo[]>>>{
    return this.http.post<ResponseData<PagedInfo<SearchedUserInfo[]>>>(this.api.searchedUserInfoPath,pageComm);
  }
  /**
   * 查询用户的择偶信息
   * @return 择偶信息
   */
  getUserCriterionInfo():Observable<ResponseData<UserCriterionInfo>>{
    return this.http.get<ResponseData<UserCriterionInfo>>(this.api.userCriterionInfoPath);
  }

}
