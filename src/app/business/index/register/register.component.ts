import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BusinessSharedApi} from '../../../core/data/api.data';
import {RegisterService} from '../../../core/service/register.service';
import {FormState} from '../../../core/data/form-state.data';
import {AreaService} from '../../../core/service/area.service';
import {AreaData} from '../../../core/data/area.data';
import {MatSelectChange} from '@angular/material';
import {EducationRange,IncomeRange} from '../../../core/data/static.data';
import {RegisterStatus} from '../data';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /**
   * 账户信息FormGroup
   */
  accountGroup: FormGroup;

  imgVerificationCtr: FormControl;

  mobileCtr: FormControl;

  mobileCodeCtr: FormControl;

  nicknameCtr: FormControl;

  passwordCtr:FormControl;

  parentAreaCtr:FormControl;

  subAreaCtr:FormControl;

  subArea:string;

  baseInfoGroup: FormGroup;

  sendSmsBtnHint = '获取验证码';

  sendSmsAble = true;

  parentAreas:Array<AreaData>;

  subAreas:Array<AreaData>;
  educationRange:any;
  incomeRange:any;
  registerState:number;
  heightRange:Array<number>;
  constructor(private formBuilder: FormBuilder,
              public sharedApi: BusinessSharedApi,
              private registerService: RegisterService,
              private areaService:AreaService,
              public formState: FormState) {
    this.educationRange =EducationRange;
    this.incomeRange = IncomeRange;
    this.registerState = RegisterStatus.ING;
  }

  ngOnInit() {
    this.getParentArea();
    this.initFormGroup();
    this.initHeightRange();
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
  initFormGroup(){
    this.accountGroup = this.formBuilder.group({
      'imgVerificationCtr': [
        '',
        [Validators.required],
        [(formControl: FormControl) => this.registerService.verifyImgVerificationCode(formControl.value)]
      ],
      'mobileCtr': [
        '',
        [Validators.required, Validators.pattern(this.registerService.mobileReg)],
        [(formControl: FormControl) => this.registerService.verifyMobile(formControl.value)]
      ],
      'mobileCodeCtr': [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
        [(formControl: FormControl) => this.registerService.verifyMobileVerificationCode(formControl.value)]
      ],
      'nicknameCtr': [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(10)],
        [(formControl: FormControl) => this.registerService.verifyNickname(formControl.value)]
      ],
      'passwordCtr': [
        '',
        [
          Validators.required, Validators.pattern(this.registerService.passwordReg),
        ],
        []
      ]
    });
    this.imgVerificationCtr = this.accountGroup.get('imgVerificationCtr') as FormControl;
    this.mobileCtr = this.accountGroup.get('mobileCtr') as FormControl;
    this.mobileCodeCtr = this.accountGroup.get('mobileCodeCtr') as FormControl;
    this.nicknameCtr = this.accountGroup.get('nicknameCtr') as FormControl;
    this.passwordCtr = this.accountGroup.get('passwordCtr') as FormControl;


    this.baseInfoGroup = this.formBuilder.group({
      'genderCtr':['1'],
      'birthdayCtr': ['1993-11-23'],
      'parentAreaCtr': ['1-北京'],
      'subAreaCtr': ['东城'],
      'heightCtr':[170,[],[]],
      'educationCtr':['2'],
      'incomeCtr':['2'],
    });
    this.getSubAreaByString('1-北京');
  }
  gets(change){
    console.log(change);
  }
  /**
   * 注册
   */
  register(){
    this.registerService.register(this.accountGroup,this.baseInfoGroup).subscribe(res=>{
      this.registerState = res.data?RegisterStatus.SUCCESS:RegisterStatus.ERROR;
    });
  }
  /**
   *  获得图片验证码状态
   * @returns {any}表单状态
   */
  getImgVerificationCodeStatus() {
    if (this.imgVerificationCtr.touched) {
      if (this.imgVerificationCtr.hasError('required')) {
        return this.formState.NULL;
      } else if (this.imgVerificationCtr.hasError('error')) {
        return this.formState.ERROR;
      } else {
        return this.formState.SUCCESS;
      }
    } else {
      return this.formState.DEFAULT;
    }
  }

  /**
   *  获得手机验证状态
   * @returns {any}表单状态
   */
  getMobileStatus() {
    if (this.mobileCtr.touched) {
      if (this.mobileCtr.hasError('required')) {
        return this.formState.NULL;
      } else if (this.mobileCtr.hasError('error')) {
        return this.formState.ERROR;
      } else if (this.mobileCtr.hasError('pattern')) {
        return this.formState.PATTERN;
      } else {
        return this.formState.SUCCESS;
      }
    } else {
      return this.formState.DEFAULT;
    }
  }

  /**
   * 发送短信验证码按钮状态
   * @returns {boolean}只有图片验证码输入框和手机输入框都有效,且sendSmsAble为true时此按钮的状态才为有效
   */
  sendMobileVerificationCodeState() {
    return this.imgVerificationCtr.valid && this.mobileCtr.valid && this.sendSmsAble;
  }

  /**
   * 发送手机验证码
   */
  sendMobileVerificationCode() {
    this.sendSmsBtnHint= '发送中...';
    this.sendSmsAble = false;
    this.registerService.sendMobileVerificationCode(this.mobileCtr.value).subscribe(res => {
      if (res.data) {
        this.sendSmsBtnHint = '获取成功(60)';
        this.sendSmsCountDown();
      } else {
        this.sendSmsBtnHint = '获取失败!';
        this.sendSmsAble = true;
      }
    });
  }

  /**
   * 发送短信验证码倒计时
   */
  sendSmsCountDown() {
    let count = 59;
    let timer = setInterval(() => {
      this.sendSmsBtnHint = `获取成功(${count})`;
      if (count == 0) {
        this.sendSmsBtnHint = '重新获取';
        this.sendSmsAble = true;
        clearInterval(timer);
      }
      count--;
    }, 1000);
  }

  /**
   *  获得手机验证码状态
   * @returns {any}表单状态
   */
  getMobileCodeStatus() {
    if (this.mobileCodeCtr.touched) {
      if (this.mobileCodeCtr.hasError('required')) {
        return this.formState.NULL;
      } else if (this.mobileCodeCtr.hasError('error')) {
        return this.formState.ERROR;
      } else if (this.mobileCodeCtr.hasError('minlength')||this.mobileCodeCtr.hasError('maxlength')) {
        return this.formState.PATTERN;
      } else {
        return this.formState.SUCCESS;
      }

    } else {
      return this.formState.DEFAULT;
    }
  }

  /**
   *  获得昵称验证状态
   * @returns {any}表单状态
   */
  getNicknameStatus() {
    if (this.nicknameCtr.touched) {
      if (this.nicknameCtr.hasError('required')) {
        return this.formState.NULL;
      } else if (this.nicknameCtr.hasError('error')) {
        return this.formState.ERROR;
      } else if (this.nicknameCtr.hasError('minlength')||this.nicknameCtr.hasError('maxlength')) {
        return this.formState.PATTERN;
      } else {
        return this.formState.SUCCESS;
      }
    } else {
      return this.formState.DEFAULT;
    }
  }

  /**
   *  获得密码验证状态
   * @returns {any}表单状态
   */
  getPasswordStatus() {
    if (this.passwordCtr.touched) {
      if (this.passwordCtr.hasError('required')) {
        return this.formState.NULL;
      } else if (this.passwordCtr.hasError('pattern')) {
        return this.formState.PATTERN;
      } else {
        return this.formState.SUCCESS;
      }
    } else {
      return this.formState.DEFAULT;
    }
  }

  /**
   * 获取父级区域
   */
  getParentArea(){
    this.areaService.getParentArea("0","1","34").subscribe(res=>{
      this.parentAreas = res.data;
    });
  }

  /**
   * 获取子级区域
   */
  getSubArea(change:MatSelectChange){
    this.areaService.getSubArea(change.value).subscribe(res=>{
      this.subAreas = res.data;
      this.subArea = this.subAreas[0].short_name;
    });
  }

  /**
   * 获取子级区域
   */
  getSubAreaByString(parentAreaString:string){
    this.areaService.getSubArea(parentAreaString).subscribe(res=>{
      this.subAreas = res.data;
      this.subArea = this.subAreas[0].short_name;
    });
  }

}
