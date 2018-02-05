import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BusinessSharedApi, BusinessUserApi} from '../data/api';
import {Observable} from 'rxjs/Observable';
import {ResponseData} from '../data/response-data';
import {ValidationErrors} from '@angular/forms/src/directives/validators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/**
 * 注册服务
 */
@Injectable()
export class RegisterService{
  public mobileReg =/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;

  constructor(private http:HttpClient,private sharedApi:BusinessSharedApi,
  private userApi:BusinessUserApi
  ) {

  }

  /**
   * 验证图片验证码的正确性
   * @param {string} code 验证码
   * @returns Observable<ValidationErrors|null> 验证结果
   */
  public verifyImgVerificationCode(code:string):Observable<ValidationErrors|null>{
    return this.http.get(this.sharedApi.getVerifyImgVerificationCodePath(code)).map(res=>{
      return res['data']?null:{'error':true }
    });
  }

  public verifyMobile(mobile:string){
    return this.http.get(this.userApi.getVerifyMobilePath(mobile)).map(res=>{
      return res['data']?null:{'error':true }
    });
  }
}
