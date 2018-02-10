import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CenterService} from '../../../core/service/center.service';
import {CenterInfo} from '../../../core/data/dto/user.data';
import {MatDialog} from '@angular/material';
import {UploadImgComponent} from '../../../shared/upload-img/upload-img.component';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  showMyProfileOperation:boolean;
  centerInfo:CenterInfo;
  constructor(private route:ActivatedRoute,private centerService:CenterService,
              private dialog:MatDialog
              ) {


  }
  ngOnInit() {
    this.centerService.getCenterInfo(this.route.snapshot.params['id']).subscribe(res=>{
      this.centerInfo = res.data;
    })
  }
  openUploadImgDialog(){
    this.dialog.open(UploadImgComponent);
  }

  toggleMyProfileOperation(){
    this.showMyProfileOperation = !this.showMyProfileOperation;
  }
}
