import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../core/service/shared.service';
import {Article} from '../../../core/data/vo/articles.data';
import {PageComm} from '../../../core/data/dto/page-comm.data';
import {CenterService} from '../../../core/service/center.service';
import {QueryOtherComm} from '../../../core/data/dto/query-other-comm.data';
import {MoodService} from '../../../core/service/mood.service';
import {PagedInfo} from '../../../core/data/vo/paged-info.data';
import {MoodInfo} from '../../../core/data/dto/mood.data';
import {HomeService} from '../../../core/service/home.service';

@Component({
  selector: 'app-moods',
  templateUrl: './moods.component.html',
  styleUrls: ['./moods.component.css']
})
export class MoodsComponent implements OnInit {

  /**
   * 文章推选数组
   */
  articles:Article[];

  /**
   * 分页命令
   */
  pageComm:PageComm;

  /**
   * 心情分页数据
   */
  pageInfo:PagedInfo<MoodInfo[]>;

  /**
   * 心情数组
   */
  moods:MoodInfo[];
  constructor( private sharedService:SharedService,private homeService:HomeService,

               private moodService:MoodService) {
    //初始化查询数据
    let query = new QueryOtherComm();
    query.ofUserId = this.homeService.titleUser.userId;
    this.pageComm = new PageComm();
    this.pageComm.condition=query;

  }

  ngOnInit() {


    this.searchMood();
    /*this.sharedService.getArticles("5","1","10").subscribe(res=>{
      this.articles = res.data;
    });*/
  }

  /**
   * 查询心情
   */
  searchMood(){
    this.moodService.getMoodByCenter(this.pageComm).subscribe(res=>{
      this.pageInfo = res.data;
      this.moods = this.pageInfo.data;
    });
  }
}
