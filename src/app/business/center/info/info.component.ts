import {Component, Input, OnInit} from '@angular/core';
import {HabitArgs} from '../../../core/data/app.data';
import {ActivatedRoute} from '@angular/router';
import {InfoService} from '../../../core/service/info.service';
import {AllUserInfo, SimplenessUserInfo, User, UserInfo} from '../../../core/data/vo/user.data';
import {MatDialog} from '@angular/material';
import {UpdateIntroductionComponent} from './update-introduction/update-introduction.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  arg:HabitArgs;

  /**
   * 用户中心中户id
   */
  centerUserId:string;
  allUserInfo:AllUserInfo;
  user:UserInfo;
  halfUser:SimplenessUserInfo;
  constructor(private route:ActivatedRoute,private infoService:InfoService,
              private dialog:MatDialog
              ) {
    this.arg = new HabitArgs();
    this.arg.labels=['不吃','微辣','辣'];
    this.arg.value=1;
    this.centerUserId = route.snapshot.parent.params['id'];
  }

  ngOnInit() {
    this.infoService.getAllUserInfo(this.centerUserId).subscribe(res=>{
      this.halfUser = res.data.halfUserInfo;
      this.user = res.data.userInfo;
    })
  }

  /**
   * 打开更新个人简介模态框
   */
  openUpdateIntroductionDialog(){
    this.dialog.open(UpdateIntroductionComponent,{autoFocus:false,data:this.user.introduction});
  }
}
