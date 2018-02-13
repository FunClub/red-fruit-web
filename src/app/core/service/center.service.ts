import { Injectable } from '@angular/core';
import {CenterApi} from '../data/api.data';
import {HttpClient} from '@angular/common/http';
import {ResponseData} from '../data/vo/response.data';
import {CenterInfo} from '../data/vo/user.data';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CenterService {

  /**
   * 个人中心信息
   */
  centerInfo:CenterInfo;
  constructor(private centerApi:CenterApi,private http:HttpClient) {
    this.centerInfo = new CenterInfo();
  }

  /**
   * 上传头像或者墙纸
   * @param {string} newImg 新图片(剪切后)
   * @param {string} originalImg 原始图片
   * @param {string} type 头像(profile)还是墙纸(banner)
   */
  uploadProfile(newImg:string,type:string,originalImg?:string){
    let data = new FormData();
    data.append("newImg",this.dataURLtoBlob(newImg));
    data.append("type",type);
    if(originalImg){
      data.append("originalImg",originalImg);
    }
    return this.http.post<ResponseData<boolean>>(this.centerApi.profile,data);
  }

  dataURLtoBlob(dataurl) {
    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
  }

  /**
   * 获取用户中心信息
   * @param {string} centerUserId 用户中心用户id
   * @returns {Observable<ResponseData<CenterInfo>>}
   */
  getCenterInfo(centerUserId:string):Observable<ResponseData<CenterInfo>>{
    return this.http.get<ResponseData<CenterInfo>>(this.centerApi.getCenterPath(centerUserId)).map(res=>{
      this.centerInfo = res.data;
      return res;
    });
  }
}
