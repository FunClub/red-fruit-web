import {ToastOptions} from 'ng2-toastr';
/**
 * 显示心情图片的模型
 */
export class ShowMoodImg {
  /**
   * 普通光标
   * @type {number}
   */
  SIMPLE_CURSOR:number=0;

  /**
   * 上一张图片的光标
   * @type {number}
   */
  PREV_CURSOR:number=1;

  /**
   * 缩小图片的光标
   * @type {number}
   */
  ZOOM_OUT_CURSOR:number=2;

  /**
   * 下一张图片的光标
   * @type {number}
   */
  NEXT_CURSOR:number=3;


}


export class RfEditorOptions {
  language="zh_cn";
  toolbarButtons= ['emoticons','insertImage','bold','color','insertLink','fullscreen', 'html','undo', 'redo'];
  toolbarButtonsSM=['emoticons','insertImage','bold','color','insertLink','fullscreen', 'html','undo', 'redo'];
  toolbarButtonsXS=['emoticons','insertImage','bold','color','insertLink','fullscreen', 'html','undo', 'redo'];
  heightMax=300;
  heightMin=80;
  height;
  tabSpaces=4;
  toolbarBottom=false;
  placeholderText= "书写青春....";
  imageResize=true;
  imageManagerLoadURL="album/editor-photo";
  editorClass='editor-class';
  htmlDoNotWrapTags=['script', 'img'];
  imageEditButtons=[];
  enter="$.FroalaEditor.ENTER_BR";
  /*  imageUploadURL="share/upload";*/
}

export class Img{
  static PREFIX:string = "http://taomei1314.com/";
}
/**
 *显示生活习惯的参数
 */
export class HabitArg{
  labels:string[];
  value:string;

  constructor(labels: string[], value: string) {
    this.labels = labels;
    this.value = value;
  }
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
 * 职业
 * @type {string[]}
 */
export  const Professions=[
  {label:'不填写',value:'-1'},
  {label:'学生',value:'0'},
  {label:'白领',value:'1'},
  {label:'全职太太',value:'2'},
  {label:'个体户',value:'3'},
  {label:'主播',value:'4'},
  {label:'老师',value:'5'},
  {label:'经理',value:'6'},
  {label:'厨师',value:'7'},
  {label:'老板',value:'8'},
  {label:'房东',value:'9'}
];
/**
 * 身高范围
 * @type {{label: string; value: string}[]}
 */
export const HeightRange=[
  {label:'不填写',value:'-1'},
  {label:'150厘米以下',value:'150-LOWER'},
  {label:'150-154厘米',value:'150-154'},
  {label:'155-159厘米',value:'155-159'},
  {label:'160-164厘米',value:'160-164'},
  {label:'165-169厘米',value:'165-169'},
  {label:'170-174厘米',value:'170-174'},
  {label:'175-179厘米',value:'175-179'},
  {label:'180-184厘米',value:'180-184'},
  {label:'185-190厘米',value:'185-190'},
  {label:'190厘米以上',value:'190-OVER'}
];
/**
 * 教育范围
 * @type {{label: string; value: string}[]}
 */
export const EducationRange=[
  {label:'不填写',value:'-1'},
  {label:'大专及以下',value:'0'},
  {label:'专科',value:'1'},
  {label:'本科',value:'2'},
  {label:'硕士',value:'3'},
  {label:'博士',value:'4'},
  {label:'博士后',value:'5'},

];
/**
 * 年龄范围
 * @type {{label: string; value: string}[]}
 */
export const AgeRange=[
  {label:'不填写',value:'-1'},
  {label:'20岁以下',value:'20-LOWER'},
  {label:'20-24岁',value:'20-24'},
  {label:'25-29岁',value:'25-29'},
  {label:'30-34岁',value:'30-34'},
  {label:'25-40岁',value:'25-40'},
  {label:'40岁以上',value:'40-OVER'},
];

/**
 * 体重范围
 * @type {{label: string; value: string}[]}
 */
export const WeightRange=[
  {label:'不填写',value:'-1'},
  {label:'80斤以下',value:'80-LOWER'},
  {label:'80-90斤',value:'80-90'},
  {label:'90-100斤',value:'90-100'},
  {label:'100-110斤',value:'100-110'},
  {label:'110-120斤',value:'110-120'},
  {label:'130-140斤',value:'130-140'},
  {label:'140-150斤',value:'140-150'},
  {label:'150斤以上',value:'150-OVER'},
];

/**
 * 收入范围
 * @type {{label: string; value: string}[]}
 */
export const IncomeRange=[
  {label:'不填写',value:'-1'},
  {label:'3000元以下',value:'3000-LOWER'},
  {label:'3000-5000元',value:'3000-5000'},
  {label:'5000-10000元',value:'5000-10000'},
  {label:'10000-12000元',value:'10000-12000'},
  {label:'20000-50000元',value:'20000-50000'},
  {label:'50000元以上',value:'50000-OVER'},
];
