import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SharedApi, RegisterApi} from '../data/api.data';
import {Observable} from 'rxjs/Observable';
import {ResponseData} from '../data/dto/response.data';
import {ValidationErrors} from '@angular/forms/src/directives/validators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {FormGroup} from '@angular/forms';
import {User} from '../data/dto/user.data';
import {HttpParams} from '@angular/common/http';

/**
 * 注册服务
 */
@Injectable()
export class RegisterService{

  constructor(private http:HttpClient,
  private registerApi:RegisterApi
  ) {

  }

  /**
   * 注册
   * @param {FormGroup} accountGroup 账号信息
   * @param {FormGroup} infoGroup 基本信息
   * @returns {Observable<ResponseData<boolean>>}
   */
  register(accountGroup:FormGroup,infoGroup:FormGroup):Observable<ResponseData<boolean>>{
    let registerInfo = new User();

    registerInfo.mobile = accountGroup.get('mobileCtr').value;
    registerInfo.password = accountGroup.get('passwordCtr').value;
    registerInfo.nickname = accountGroup.get('nicknameCtr').value;

    registerInfo.gender = infoGroup.get('genderCtr').value;
    registerInfo.birthday = infoGroup.get('birthdayCtr').value;
    if(typeof(registerInfo.birthday) !=="string"){
      registerInfo.birthday = registerInfo.birthday.toLocaleDateString().replace('/','-').replace('/','-');
    }

    registerInfo.parentArea = infoGroup.get('parentAreaCtr').value;
    registerInfo.subArea = infoGroup.get('subAreaCtr').value;
    registerInfo.height = infoGroup.get('heightCtr').value;
    registerInfo.education = infoGroup.get('educationCtr').value;
    registerInfo.income = infoGroup.get('incomeCtr').value;

    return this.http.post<ResponseData<boolean>>(this.registerApi.registerPath,registerInfo);
  }
  /**
   * 验证图片验证码的正确性
   * @param {string} code 验证码
   * @returns Observable<ValidationErrors|null> 验证结果
   */
  public verifyImgVerificationCode(code:string):Observable<ValidationErrors|null>{
    return this.http.get(this.registerApi.getVerifyImgVerificationCodePath(code)).map(res=>{
      return res['data']?null:{'error':true }
    });
  }

  /**
   * 验证手机号是否可用
   * @param {string} mobile 手机号
   * @returns {Observable<{error: boolean}>}验证结果
   */
  public verifyMobile(mobile:string){
    let user = new User();
    user.mobile = mobile;

    return this.http.post(this.registerApi.getIsUserExitsPath(),user).map(res=>{
      return res['data']?null:{'error':true }
    });
  }

  /**
   * 发送手机验证码
   * @param {string} mobile
   * @returns {Observable<Object>}
   */
  public sendMobileVerificationCode(mobile:string):Observable<ResponseData<boolean>>{
    return this.http.get<ResponseData<boolean>>(this.registerApi.getMobileVerificationCodePath(mobile));
  }

  /**
   * 验证手机验证码
   * @param {string} code
   * @returns {Observable<ResponseData<boolean>>}
   */
  verifyMobileVerificationCode(code:string):Observable<ValidationErrors|null>{
    return this.http.put(this.registerApi.getMobileVerificationCodePath(code),null).map(res=>{
      return res['data']?null:{'error':true }
    });
  }

  /**
   * 验证昵称
   * @param {string} nickname
   * @returns {Observable<ValidationErrors | null>}
   */
  verifyNickname(nickname:string):Observable<ValidationErrors|null>{
    let user = new User();
    user.nickname = nickname;
    return this.http.post(this.registerApi.getIsUserExitsPath(),user).map(res=>{
      return res['data']?null:{'error':true }
    });
  }
}
