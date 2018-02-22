import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ResponseData} from '../data/dto/response.data';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {LoginApi} from '../data/api.data';
import {User} from '../data/dto/user.data';
import {HomeService} from './home.service';

/**
 * 登录服务
 */
@Injectable()
export class LoginService{
  constructor(private http:HttpClient,private api:LoginApi,private homeService:HomeService
  ) {

  }

  /**
   * 用户登录
   * @param user
   * @returns {Observable<ResponseData<User>>}
   */
  login(user:any):Observable<ResponseData<boolean>>{
    return this.http.post<ResponseData<boolean>>(this.api.loginPath,user);
  }

  /**
   * 判断用户是否登录
   * @returns {Observable<Object>}
   */
  isLogin(){
    return this.http.get<ResponseData<boolean>>(this.api.isLoginPath).map(res=>{
      return res.data
    });
  }
}
