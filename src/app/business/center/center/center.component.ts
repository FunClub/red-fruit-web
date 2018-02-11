import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CenterService} from '../../../core/service/center.service';
import {CenterInfo} from '../../../core/data/vo/user.data';
import {MatDialog} from '@angular/material';
import {UploadImgComponent} from '../../../shared/upload-img/upload-img.component';
import {HomeService} from '../../../core/service/home.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  showMyProfileOperation:boolean;
  centerInfo:CenterInfo;
  constructor(private route:ActivatedRoute,private centerService:CenterService,
              private dialog:MatDialog,private homeService:HomeService
              ) {
    this.centerInfo = new CenterInfo();
  }
  ngOnInit() {
    this.initCenter();
  }

  /**
   * 初始化个人中心
   */
  initCenter(){
    this.centerService.getCenterInfo(this.route.snapshot.params['id']).subscribe(res=>{
      this.centerInfo = res.data;
      this.centerService.centerInfo = this.centerInfo;
    })
  }


  /**
   * 更换头像和壁纸
   */
  openUploadProfileDialog(type:string){
    this.dialog.open(UploadImgComponent,{data:type,autoFocus:false}).afterClosed().subscribe(result => {
      //更新标题和个人中心
      if(result){
        this.homeService.getTitleUserInfo().subscribe();
        this.initCenter();
      }

    });
  }

  toggleMyProfileOperation(){
    this.showMyProfileOperation = !this.showMyProfileOperation;
  }


}
