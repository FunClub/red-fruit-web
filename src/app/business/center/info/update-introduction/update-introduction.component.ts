import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User, UserInfo} from '../../../../core/data/dto/user.data';
import {HomeService} from '../../../../core/service/home.service';
import {InfoService} from '../../../../core/service/info.service';
import {CenterService} from '../../../../core/service/center.service';
import {ToastsManager} from 'ng2-toastr';

@Component({
  selector: 'app-update-introduction',
  templateUrl: './update-introduction.component.html',
  styleUrls: ['./update-introduction.component.css']
})
export class UpdateIntroductionComponent implements OnInit {
  formGroup:FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public user: UserInfo,
              public dialogRef: MatDialogRef<UpdateIntroductionComponent>,
  private formBuilder:FormBuilder,private infoService:InfoService,private centerService:CenterService,
  private toasts:ToastsManager
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      "introduction":[this.user.introduction,[Validators.maxLength(300)],[]]
    })
  }
  update(){
   this.infoService.updateUserInfo(this.formGroup.value).subscribe(res=>{
     if(res.data){
       this.toasts.success("修改成功");
       this.user.introduction = this.formGroup.get('introduction').value;
       this.dialogRef.close();
     }else{
       this.toasts.error("修改失败,请重试!");
     }
   })
  }
  close(){
    this.dialogRef.close();
  }
}
