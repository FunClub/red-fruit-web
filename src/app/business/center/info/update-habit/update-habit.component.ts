import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UpdateBaseInfoComponent} from '../update-base-info/update-base-info.component';
import {User, UserInfo} from '../../../../core/data/dto/user.data';
import {ToastsManager} from 'ng2-toastr';
import {InfoService} from '../../../../core/service/info.service';

@Component({
  selector: 'app-update-habit',
  templateUrl: './update-habit.component.html',
  styleUrls: ['./update-habit.component.css']
})
export class UpdateHabitComponent implements OnInit {

  user:User;
  constructor(@Inject(MAT_DIALOG_DATA) public userInfo: UserInfo,
              public dialogRef: MatDialogRef<UpdateBaseInfoComponent>,private formBuilder:FormBuilder,
              private toasts:ToastsManager,private service:InfoService) { }

  ngOnInit() {
    this.user = new User();
    this.user.eatHot = this.userInfo.eatHot;
    this.user.smoking = this.userInfo.smoking;
    this.user.drinking = this.userInfo.drinking;
    this.user.housework = this.userInfo.housework;

    this.user.shopping = this.userInfo.shopping;
    this.user.movie = this.userInfo.movie;
    this.user.animal = this.userInfo.animal;
    this.user.game = this.userInfo.game;
  }

  update(){
    this.service.updateUserInfo(this.user).subscribe(res=>{
      if(res.data){
        if(res.data){
          this.toasts.success("基本资料修改成功");
          this.applyBaseInfo();
          this.close(res.data);
        }else{
          this.toasts.success("修改失败！请重试...");
        }
      }
    })
  }
  close(res?){
    this.dialogRef.close(res);
  }
  /**
   * 应用基本信息
   */
  applyBaseInfo(){
    this.userInfo.eatHot = this.user.eatHot;
    this.userInfo.smoking = this.user.smoking;
    this.userInfo.drinking = this.user.drinking;
    this.userInfo.housework = this.user.housework;
    this.userInfo.shopping = this.user.shopping;
    this.userInfo.movie = this.user.movie;
    this.userInfo.animal = this.user.animal;
    this.userInfo.game = this.user.game;
  }
}
