import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../../core/data/vo/user.data';
import {HomeService} from '../../../../core/service/home.service';
import {InfoService} from '../../../../core/service/info.service';
import {CenterService} from '../../../../core/service/center.service';

@Component({
  selector: 'app-update-introduction',
  templateUrl: './update-introduction.component.html',
  styleUrls: ['./update-introduction.component.css']
})
export class UpdateIntroductionComponent implements OnInit {
  formGroup:FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,public dialogRef: MatDialogRef<UpdateIntroductionComponent>,
  private formBuilder:FormBuilder,private infoService:InfoService,private centerService:CenterService
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      "introduction":[this.data,[Validators.maxLength(300)],[]]
    })
  }
  update(){
   this.infoService.updateUserInfo(this.formGroup.value).subscribe(res=>{
     if(res.data){
       console.log(res.data);
     }
   })
  }
  close(){
    this.dialogRef.close();
  }
}
