import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MoodApi} from '../data/api.data';
import {Mood, MoodInfo} from '../data/dto/mood.data';
import {ResponseData} from '../data/vo/response.data';
import {Observable} from 'rxjs/Observable';
import {PagedInfo} from '../data/vo/paged-info.data';

@Injectable()
export class MoodService {

  constructor(private http:HttpClient,private moodApi:MoodApi) { }

  /**
   * 通过个人中心查询心情
   * @return 分页心情数据
   */
  getMoodByCenter(pageComm):Observable<ResponseData<PagedInfo<MoodInfo[]>>>{
    return this.http.post<ResponseData<PagedInfo<MoodInfo[]>>>(this.moodApi.getByCenterPath,pageComm);
  }

  /**
   * 创建心情
   * @param mood  心情
   * @return 创建结果
   */
  create(mood:Mood):Observable<ResponseData<boolean>>{
    return this.http.post<ResponseData<boolean>>(this.moodApi.createMoodPath,mood);
  }
}
