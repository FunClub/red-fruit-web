import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BusinessSharedApi, BusinessUserApi} from '../data/api.data';
import {Observable} from 'rxjs/Observable';
import {ResponseData} from '../data/response.data';
import {ValidationErrors} from '@angular/forms/src/directives/validators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {FormControl, FormGroup} from '@angular/forms';
import {RegisterInfo} from '../../business/index/data';

/**
 * 注册服务
 */
@Injectable()
export class RegisterService{

  /**
   * 手机正则
   * @type {RegExp}
   */
  public mobileReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;

  /**
   * 密码正则
   * @type {RegExp}
   */
  public passwordReg = /^[a-zA-Z0-9_-]{6,14}$/;

  constructor(private http:HttpClient,private sharedApi:BusinessSharedApi,
  private userApi:BusinessUserApi
  ) {

  }

  /**
   * 注册
   * @param {FormGroup} accountGroup 账号信息
   * @param {FormGroup} infoGroup 基本信息
   * @returns {Observable<ResponseData<boolean>>}
   */
  register(accountGroup:FormGroup,infoGroup:FormGroup):Observable<ResponseData<boolean>>{
    let registerInfo = new RegisterInfo();

    registerInfo.mobile = accountGroup.get('mobileCtr').value;
    registerInfo.password = accountGroup.get('passwordCtr').value;
    registerInfo.nickname = accountGroup.get('nicknameCtr').value;

    registerInfo.gender = infoGroup.get('genderCtr').value;
    registerInfo.birthday = infoGroup.get('birthdayCtr').value;
    registerInfo.parentArea = infoGroup.get('parentAreaCtr').value;
    registerInfo.subArea = infoGroup.get('subAreaCtr').value;
    registerInfo.height = infoGroup.get('heightCtr').value;
    registerInfo.education = infoGroup.get('educationCtr').value;
    registerInfo.income = infoGroup.get('incomeCtr').value;

    registerInfo.profile='assets/img/profile';
    registerInfo.banner='banner';

    return this.http.post<ResponseData<boolean>>(this.userApi.registerPath,registerInfo);
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

  /**
   * 验证手机号是否可用
   * @param {string} mobile 手机号
   * @returns {Observable<{error: boolean}>}验证结果
   */
  public verifyMobile(mobile:string){
    return this.http.get(this.userApi.getVerifyMobilePath(mobile)).map(res=>{
      return res['data']?null:{'error':true }
    });
  }

  /**
   * 发送手机验证码
   * @param {string} mobile
   * @returns {Observable<Object>}
   */
  public sendMobileVerificationCode(mobile:string):Observable<ResponseData<boolean>>{
    return this.http.get<ResponseData<boolean>>(this.userApi.getMobileVerificationCodePath(mobile));
  }

  /**
   * 验证手机验证码
   * @param {string} code
   * @returns {Observable<ResponseData<boolean>>}
   */
  verifyMobileVerificationCode(code:string):Observable<ValidationErrors|null>{
    return this.http.put(this.userApi.getMobileVerificationCodePath(code),null).map(res=>{
      return res['data']?null:{'error':true }
    });
  }

  /**
   * 验证昵称
   * @param {string} nickname
   * @returns {Observable<ValidationErrors | null>}
   */
  verifyNickname(nickname:string):Observable<ValidationErrors|null>{
    return this.http.get(this.userApi.getVerifyNicknamePath(nickname)).map(res=>{
      return res['data']?null:{'error':true }
    });
  }



}
