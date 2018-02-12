import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSelectChange} from '@angular/material';
import {UserInfo} from '../../../../core/data/vo/user.data';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from '../../../../core/service/register.service';
import {AreaData} from '../../../../core/data/vo/area.data';
import {EducationRange, HeightRange, IncomeRange, Professions} from '../../../../core/data/app.data';
import {SharedService} from '../../../../core/service/shared.service';
import {InfoService} from '../../../../core/service/info.service';
import {ToastsManager} from 'ng2-toastr';
import {CenterService} from '../../../../core/service/center.service';

@Component({
  selector: 'app-update-base-info',
  templateUrl: './update-base-info.component.html',
  styleUrls: ['./update-base-info.component.css']
})
export class UpdateBaseInfoComponent implements OnInit {
  infoGroup:FormGroup;
  educationRange:any;
  incomeRange:any;
  registerState:string;
  parentAreas:Array<AreaData>;

  subAreas:Array<AreaData>;
  subArea:any;
  heightRange:Array<number>;
  weightRange:Array<number>;
  professions:any;
  nicknameCtr:FormControl;
  constructor(@Inject(MAT_DIALOG_DATA) public user: UserInfo,
              public dialogRef: MatDialogRef<UpdateBaseInfoComponent>,private formBuilder:FormBuilder,
              private registerService:RegisterService,private sharedService:SharedService,
              private infoService:InfoService,private toasts:ToastsManager
              ) {
    this.educationRange =EducationRange;
    this.incomeRange = IncomeRange;
    this.professions = Professions;
  }

  ngOnInit() {
    this.infoGroup = this.formBuilder.group({
      "nickname":[
        this.user.nickname,
        [Validators.required, Validators.minLength(2), Validators.maxLength(10)],
        [(formControl: FormControl) => this.infoService.nicknameCanUpdate(formControl.value)]],
      "height":[this.user.height],
      "weight":[this.user.weight],
      "parentArea":[this.user.parentArea],
      "subArea":[this.user.subArea],
      "profession":[this.user.profession],
      "income":[this.user.income],
      "education":[this.user.education],
      "houseAvailable":[this.user.houseAvailable]
    });
    this.nicknameCtr = <FormControl>this.infoGroup.get('nickname');
    this.getParentArea();
    this.getSubAreaByString(this.user.parentArea);
    this.initHeightRange();
    this.initWeightRange();
  }
  close(){
    this.dialogRef.close();
  }
  update(){
    this.infoService.updateUserInfo(this.infoGroup.value).subscribe(res=>{
      if(res.data){
        this.toasts.success("基本资料修改成功");
        this.applyBaseInfo();
        this.close();
      }else{
        this.toasts.success("修改失败！请重试...");
      }
    });
  }

  /**
   * 应用基本信息
   */
  applyBaseInfo(){
    this.user.nickname = this.infoGroup.get('nickname').value;
    this.user.height = this.infoGroup.get('height').value;
    this.user.weight = this.infoGroup.get('weight').value;
    this.user.parentArea = this.infoGroup.get('parentArea').value;
    this.user.subArea = this.infoGroup.get('subArea').value;
    this.user.profession = this.infoGroup.get('profession').value;
    this.user.education = this.infoGroup.get('education').value;
    this.user.income = this.infoGroup.get('income').value;
    this.user.houseAvailable = this.infoGroup.get('houseAvailable').value;
  }
  /**
   * 获取父级区域
   */
  getParentArea(){
    this.sharedService.getParentArea("0","1","34").subscribe(res=>{
      this.parentAreas = res.data;
    });
  }
  /**
   * 获取子级区域
   */
  getSubArea(change:MatSelectChange){
    this.sharedService.getSubArea(change.value).subscribe(res=>{
      this.subAreas = res.data;
      this.subArea = this.subAreas[0].short_name;
    });
  }

  /**
   * 获取子级区域
   */
  getSubAreaByString(parentAreaString:string){
    this.sharedService.getSubArea(parentAreaString).subscribe(res=>{
      this.subAreas = res.data;
      this.subArea = this.user.subArea;
    });
  }
  /**
   * 初始化体重范围数据
   */
  initWeightRange(){
    let start = 70;
    this.weightRange=[];
    for(;start<=230;start++){
      this.weightRange.push(start);
    }
  }
  /**
   * 初始化身高范围数据
   */
  initHeightRange(){
    let start = 150;
    this.heightRange=[];
    for(;start<=230;start++){
      this.heightRange.push(start);
    }
  }
}
