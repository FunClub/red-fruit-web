import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CenterService} from '../../../core/service/center.service';
import {CenterInfo} from '../../../core/data/dto/user.data';
import {MatDialog} from '@angular/material';
import {CropperImgComponent} from '../../../shared/cropper-img/cropper-img.component';
import {HomeService} from '../../../core/service/home.service';
import {SharedService} from '../../../core/service/shared.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  showMyProfileOperation:boolean;
  centerInfo:CenterInfo;
  constructor(private route:ActivatedRoute,public centerService:CenterService,
              private dialog:MatDialog,private homeService:HomeService,private shareService:SharedService
              ) {
    this.centerInfo = new CenterInfo();
    shareService.toTop();
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
    })
  }


  /**
   * 更换头像和壁纸
   */
  openUploadProfileDialog(type:string){
    this.dialog.open(CropperImgComponent,{data:type}).afterClosed().subscribe(result => {
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
