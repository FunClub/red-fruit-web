
/**
 * 注册信息
 */
export class RegisterInfo{
  mobile:string;
  password:string;
  nickname:string;
  gender:string;
  birthday:string;
  parentArea:string;
  subArea:string;
  height:string;
  education:string;
  income:string;
  profile:string;
  banner:string;
}

/**
 * 注册状态
 */
export enum RegisterStatus{
  ING=0,
  SUCCESS=1,
  ERROR=2
}
