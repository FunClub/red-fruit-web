import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ResponseData} from '../data/vo/response.data';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {LoginApi} from '../data/api.data';

/**
 * 登录服务
 */
@Injectable()
export class LoginService{
  constructor(private http:HttpClient,private api:LoginApi
  ) {

  }

  login(user:any):Observable<ResponseData<boolean>>{
    return this.http.post<ResponseData<boolean>>(this.api.loginPath,user);
  }
}
