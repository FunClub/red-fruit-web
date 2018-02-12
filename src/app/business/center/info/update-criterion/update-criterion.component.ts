import {Component, Inject, OnInit} from '@angular/core';
import {AreaData} from '../../../../core/data/vo/area.data';
import {AgeRange, EducationRange, HeightRange, IncomeRange, Professions, WeightRange} from '../../../../core/data/app.data';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UpdateBaseInfoComponent} from '../update-base-info/update-base-info.component';
import {UserInfo} from '../../../../core/data/vo/user.data';
import {SharedService} from '../../../../core/service/shared.service';
import {InfoService} from '../../../../core/service/info.service';
import {ToastsManager} from 'ng2-toastr';

@Component({
  selector: 'app-update-criterion',
  templateUrl: './update-criterion.component.html',
  styleUrls: ['./update-criterion.component.css']
})
export class UpdateCriterionComponent implements OnInit {
  parentAreas:Array<AreaData>;
  heightRange:any;
  weightRange:any;
  professions:any;
  educationRange:any;
  incomeRange:any;
  ageRange:any;
  criterionGroup:FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public user: UserInfo,
              public dialogRef: MatDialogRef<UpdateBaseInfoComponent>,private formBuilder:FormBuilder,
              private sharedService:SharedService,private infoService:InfoService,
              private toasts:ToastsManager
              ) {
    this.educationRange =EducationRange;
    this.incomeRange = IncomeRange;
    this.professions = Professions;
    this.ageRange = AgeRange;
    this.heightRange =HeightRange;
    this.weightRange = WeightRange;
  }

  ngOnInit() {
    let tempCriterionParentArea = this.user.criterionParentArea;
    if(tempCriterionParentArea==="-1"){
      tempCriterionParentArea="-1-";
    }
    this.criterionGroup = this.formBuilder.group({
      "criterionAge":[this.user.criterionAge],
      "criterionHeight":[this.user.criterionHeight],
      "criterionWeight":[this.user.criterionWeight],
      "criterionParentArea":[tempCriterionParentArea],

      "criterionProfession":[this.user.criterionProfession],
      "criterionIncome":[this.user.criterionIncome],
      "criterionEducation":[this.user.criterionEducation],
      "criterionHouseAvailable":[this.user.criterionHouseAvailable]
    });
    this.getParentArea();
  }

  update(){
    if(this.criterionGroup.value['criterionParentArea']=="-1-"){
      this.criterionGroup.value['criterionParentArea']="-1";
    }
    this.infoService.updateUserInfo(this.criterionGroup.value).subscribe(res=>{
      if(res.data){
        if(res.data){
          this.toasts.success("基本资料修改成功");
          this.applyCriterion();
          this.close();
        }else{
          this.toasts.success("修改失败！请重试...");
        }
      }
    })
  }
  close(){
    this.dialogRef.close();
  }
  /**
   * 更新完成后应用更新
   */
  applyCriterion(){
    this.user.criterionAge = this.criterionGroup.get('criterionAge').value;
    this.user.criterionHeight = this.criterionGroup.get('criterionHeight').value;
    this.user.criterionWeight = this.criterionGroup.get('criterionWeight').value;
    if(this.criterionGroup.get('criterionParentArea').value==='-1-'){
      this.user.criterionParentArea = "-1";
    }else{
      this.user.criterionParentArea = this.criterionGroup.get('criterionParentArea').value;
    }

    this.user.criterionProfession = this.criterionGroup.get('criterionProfession').value;
    this.user.criterionIncome = this.criterionGroup.get('criterionIncome').value;
    this.user.criterionEducation = this.criterionGroup.get('criterionEducation').value;
    this.user.criterionHouseAvailable = this.criterionGroup.get('criterionHouseAvailable').value;
  }
  /**
   * 获取父级区域
   */
  getParentArea(){
    let area = new AreaData();
    area.name = "不填写";
    area.id="-1";
    area.short_name="";
    let nullAreas = [area];
    this.sharedService.getParentArea("0","1","34").subscribe(res=>{
      this.parentAreas = nullAreas.concat(res.data);

    });
  }
}
