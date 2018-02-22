import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MoodApi} from '../data/api.data';
import {Mood, MoodInfo, Trend} from '../data/dto/mood.data';
import {ResponseData} from '../data/dto/response.data';
import {Observable} from 'rxjs/Observable';
import {PagedInfo} from '../data/dto/paged-info.data';
import {TrendArgs, TrendType} from '../data/app.data';

@Injectable()
export class MoodService {

  constructor(private http: HttpClient, private moodApi: MoodApi) {
  }

  /**
   * 通过个人中心查询心情
   * @return 分页心情数据
   */
  getMoodByCenter(pageComm): Observable<ResponseData<PagedInfo<MoodInfo[]>>> {
    return this.http.post<ResponseData<PagedInfo<MoodInfo[]>>>(this.moodApi.getByCenterPath, pageComm).map((res: ResponseData<PagedInfo<MoodInfo[]>>) => {
      //初始化动态操作参数
      let moods = res.data.data;
      for (let mood of moods) {
        this.initMoodTrend(mood);
      }
      return res;
    });
  }

  /**
   * /初始化动态操作参数
   * @param {MoodInfo} mood
   */
  initMoodTrend(mood: MoodInfo) {
    let args = new TrendArgs();
    args.discussionCount = mood.discussionCount;
    if (mood.imgs && mood.imgs.length > 0) {
      args.firstTrendImg = mood.imgs[0];
    }
    args.thumbsUpAble = mood.thumbAble;
    args.thumbsUpCount = mood.thumbsUpCount;
    args.trendContent = mood.content;
    args.trendId = mood.moodId;
    args.trendType = TrendType.MOOD;
    args.trendUserId = mood.userId;
    mood.trendArgs = args;
  }

  /**
   * 创建心情
   * @param mood  心情
   * @return 心情信息
   */
  create(mood: Mood): Observable<ResponseData<MoodInfo>> {
    return this.http.post<ResponseData<MoodInfo>>(this.moodApi.createMoodPath, mood).map(res => {
      if (res.data)
        this.initMoodTrend(res.data);
      return res;
    });
  }
}
