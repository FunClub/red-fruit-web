import {Component, Input, OnInit} from '@angular/core';
import {HabitArg} from '../../../core/data/app.data';
import {ActivatedRoute} from '@angular/router';
import {InfoService} from '../../../core/service/info.service';
import {AllUserInfo, SimplenessUserInfo, User, UserInfo} from '../../../core/data/dto/user.data';
import {MatDialog} from '@angular/material';
import {UpdateIntroductionComponent} from './update-introduction/update-introduction.component';
import {BlockScrollStrategy} from '@angular/cdk/overlay/typings/scroll/block-scroll-strategy';
import {UpdateBaseInfoComponent} from './update-base-info/update-base-info.component';
import {UpdateHabitComponent} from './update-habit/update-habit.component';
import {UpdateCriterionComponent} from './update-criterion/update-criterion.component';
import {CenterService} from '../../../core/service/center.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  /**
   * 用户爱好参数
   */
  habitArgs:HabitArg[];

  /**
   * 用户中心中户id
   */
  centerUserId:string;

  /**
   * 用户所有信息
   */
  allUserInfo:AllUserInfo;

  /**
   * 用户信息
   */
  user:UserInfo;

  /**
   * 用户另一半信息
   */
  halfUser:SimplenessUserInfo;


  constructor(private route:ActivatedRoute,private infoService:InfoService,
              private dialog:MatDialog,public centerService:CenterService
              ) {
    this.centerUserId = route.snapshot.parent.params['id'];

  }

  ngOnInit() {
    this.initInfo();
    this.initHabitArgsForPlaceHolder();
  }

  /**
   * 打开更新生活习惯模态框
   */
  openUpdateCriterionDialog(){
    this.dialog.open(UpdateCriterionComponent,{
      data:this.user,
    });
  }

  /**
   * 打开更新生活习惯模态框
   */
  openUpdateHabitDialog(){
    this.dialog.open(UpdateHabitComponent,{
      data:this.user,
    }).afterClosed().subscribe(res=>{
      if(res){
        this.initHabitArgs();
      }
    });
  }

  /**
   * 打开更新个人简介模态框
   */
  openUpdateIntroductionDialog(){
    this.dialog.open(UpdateIntroductionComponent,{
      data:this.user,
    });
  }

  /**
   * 打开更新基本资料模态框
   */
  openUpdateBaseInfoDialog(){
    this.dialog.open(UpdateBaseInfoComponent,{
      data:this.user,
    });
  }
  initInfo(){
    this.infoService.getAllUserInfo(this.centerUserId).subscribe(res=>{
      this.halfUser = res.data.halfUserInfo;
      this.user = res.data.userInfo;
      this.initHabitArgs();
    })
  }

  /**
   * 初始化生活习惯
   */
  initHabitArgs(){
    this.habitArgs = [
      new HabitArg(["不吃","微辣","较辣"],this.user.eatHot),
      new HabitArg(["不抽","偶尔","经常"],this.user.smoking),
      new HabitArg(["不喝","偶尔","经常"],this.user.drinking),
      new HabitArg(["不会","略懂","熟练"],this.user.housework),

      new HabitArg(["厌恶","一般","喜欢"],this.user.shopping),
      new HabitArg(["厌恶","一般","喜欢"],this.user.movie),
      new HabitArg(["厌恶","一般","喜欢"],this.user.animal),
      new HabitArg(["厌恶","一般","喜欢"],this.user.game),
    ];
  }

  /**
   * 习惯数据还没拿到时的占位处理
   */
  initHabitArgsForPlaceHolder(){
    this.habitArgs = [
      new HabitArg(["不吃","微辣","较辣"],"-1"),
      new HabitArg(["不抽","偶尔","经常"],"-1"),
      new HabitArg(["不喝","偶尔","经常"],"-1"),
      new HabitArg(["不会","略懂","熟练"],"-1"),
      new HabitArg(["不吃","微辣","较辣"],"-1"),
      new HabitArg(["不抽","偶尔","经常"],"-1"),
      new HabitArg(["不喝","偶尔","经常"],"-1"),
      new HabitArg(["不会","略懂","熟练"],"-1"),
    ];
  }
}
