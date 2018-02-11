
import {ToastOptions} from 'ng2-toastr';
export class Img{
  static PREFIX:string = "http://taomei1314.com/";
}
/**
 *显示生活习惯的参数
 */
export class HabitArgs{
  labels:string[];
  value:number
}

/**
 * 提示框配置
 */
export class CustomToastOption extends ToastOptions{
  animate = 'flyRight'; // you can override any options available
  newestOnTop = false;
  showCloseButton = true;
  enableHTML=true;
  messageClass='toasts-message'
}
export class Reg{
  /**
   * 手机正则
   * @type {RegExp}
   */
  static MOBILE = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;

  /**
   * 密码正则
   * @type {RegExp}
   */
  static PASSWORD = /^[a-zA-Z0-9_-]{6,14}$/;
}

/**
 * 表单状态
 */
export class FormState {
  DEFAULT:string = 'default';
  SUCCESS:string = 'success';
  ERROR:string = 'error';
  NULL:string = 'null';
  PATTERN:string = 'pattern';
}
/**
 * 注册状态
 */
export class RegisterStatus{
  ING:string="ing";
  SUCCESS:string ="success";
  FAILED:string = "failed";
}
/**
 * 身高范围
 * @type {{label: string; value: string}[]}
 */
export const HeightRange=[
  {label:'150厘米以下',value:'0'},
  {label:'150-154厘米',value:'1'},
  {label:'155-159厘米',value:'2'},
  {label:'160-164厘米',value:'3'},
  {label:'165-169厘米',value:'4'},
  {label:'170-174厘米',value:'5'},
  {label:'175-179厘米',value:'6'},
  {label:'180-184厘米',value:'7'},
  {label:'185-190厘米',value:'8'},
  {label:'190厘米以上',value:'9'}
];
/**
 * 教育范围
 * @type {{label: string; value: string}[]}
 */
export const EducationRange=[
  {label:'大专及以下',value:'0'},
  {label:'专科',value:'1'},
  {label:'本科',value:'2'},
  {label:'硕士',value:'3'},
  {label:'博士',value:'4'},
  {label:'博士后',value:'5'},

];

/**
 * 收入范围
 * @type {{label: string; value: string}[]}
 */
export const IncomeRange=[
  {label:'3000元以下',value:'0'},
  {label:'3000-5000元',value:'1'},
  {label:'5000-10000元',value:'2'},
  {label:'10000-12000元',value:'3'},
  {label:'20000-50000元',value:'4'},
  {label:'50000元以上',value:'5'},
];
