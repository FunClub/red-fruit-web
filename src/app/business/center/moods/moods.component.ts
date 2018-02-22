import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../core/service/shared.service';
import {Article} from '../../../core/data/dto/articles.data';
import {PageComm} from '../../../core/data/dto/page-comm.data';
import {CenterService} from '../../../core/service/center.service';
import {QueryOtherComm} from '../../../core/data/dto/query-other-comm.data';
import {MoodService} from '../../../core/service/mood.service';
import {PagedInfo} from '../../../core/data/dto/paged-info.data';
import {MoodInfo} from '../../../core/data/dto/mood.data';
import {HomeService} from '../../../core/service/home.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-moods',
  templateUrl: './moods.component.html',
  styleUrls: ['./moods.component.css']
})
export class MoodsComponent implements OnInit {

  /**
   * 文章推选数组
   */
  articles: Article[];

  /**
   * 分页命令
   */
  pageComm: PageComm;

  /**
   * 心情分页数据
   */
  pageInfo: PagedInfo<MoodInfo[]>;

  /**
   * 心情数组
   */
  moods: MoodInfo[]=[];

  /**
   * 查询心情是否被锁定
   */
  searchLocked:boolean;
  constructor(private sharedService: SharedService, private homeService: HomeService,
              private moodService: MoodService,private centerService:CenterService,
              private router:ActivatedRoute
  ) {


  }

  ngOnInit() {
    this.centerService.getCenterInfo(this.router.parent.snapshot.params['id']).subscribe(res=>{
      //初始化查询数据
      let query = new QueryOtherComm();
      query.ofUserId = this.centerService.centerInfo.userId;
      this.pageComm = new PageComm();
      this.pageComm.condition = query;
      this.searchMood();
    });

    /*this.sharedService.getArticles("5","1","10").subscribe(res=>{
      this.articles = res.data;
    });*/
  }

  /**
   * 追加显示用户
   */
  appendMood() {
    if (this.pageInfo.hasNext && !this.searchLocked) {
      this.pageComm.page.current++;
      this. searchMood();
    }

  }

  /**
   * 在开始处 插入心情
   * @param moodInfo
   */
  insertMood(moodInfo){
    this.moods = [moodInfo].concat(this.moods);
  }
  /**
   * 查询心情
   */
  searchMood() {
    this.searchLocked = true;
    this.moodService.getMoodByCenter(this.pageComm).subscribe(res => {
      this.pageInfo = res.data;
      this.moods = this.moods.concat(this.pageInfo.data);
      this.searchLocked = false;
    });
  }
}
