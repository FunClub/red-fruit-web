import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BusinessSharedApi} from '../../../core/data/api';
import {RegisterService} from '../../../core/service/register.service';
import {FormState} from '../../../core/data/form-state';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /**
   * 账户信息FormGroup
   */
  private accountGroup:FormGroup;

  private imgVerificationCtr:FormControl;

  private mobileCtr:FormControl;

  private baseInfoGroup:FormGroup;


  constructor(private formBuilder:FormBuilder,
              public sharedApi:BusinessSharedApi,
              private service:RegisterService,
              public formState:FormState
  ) {

  }

  ngOnInit() {
      this.accountGroup = this.formBuilder.group({
        "imgVerificationCtr":[
          "",
          [Validators.required],
          [(formControl:FormControl)=>this.service.verifyImgVerificationCode(formControl.value)]
        ],
        "mobileCtr":[
          "",
          [Validators.required,Validators.pattern(this.service.mobileReg)],
          [(formControl:FormControl)=>this.service.verifyMobile(formControl.value)]
        ],
      });
      this.imgVerificationCtr = this.accountGroup.get("imgVerificationCtr") as FormControl;
      this.mobileCtr = this.accountGroup.get("mobileCtr") as FormControl;

    this.baseInfoGroup = this.formBuilder.group({
      "imgVerificationCtr":["",[Validators.required],[]],
      "mobileCtr":["",[Validators.required],[]],
    });

  }

  /**
   *  获得图片验证码状态
   * @returns {any}表单状态
   */
  getImgVerificationCodeStatus(){
    if(this.imgVerificationCtr.touched){
      if(this.imgVerificationCtr.hasError('required')){
        return this.formState.NULL;
      }else if(this.imgVerificationCtr.hasError('error')){
        return this.formState.ERROR;
      }else{
        return this.formState.SUCCESS;
      }
    }else{
      return this.formState.DEFAULT;
    }
  }

  /**
   *  获得手机验证状态
   * @returns {any}表单状态
   */
  getMobileStatus(){
    if(this.mobileCtr.touched){
      if(this.mobileCtr.hasError('required')){
        return this.formState.NULL;
      }else if(this.mobileCtr.hasError('error')){
        return this.formState.ERROR;
      }else if(this.mobileCtr.hasError('pattern')){
        return this.formState.PATTERN;
      }else{
        return this.formState.SUCCESS;
      }
    }else {
      return this.formState.DEFAULT;
    }
  }




}
