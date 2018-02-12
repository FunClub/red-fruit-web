/**
 * 用户的全部信息
 */
export class AllUserInfo{

  /**
   * 用户的另一半用户信息
   */
  halfUserInfo:SimplenessUserInfo;

  /**
   * 用户自身信息
   */
  userInfo:UserInfo;
}

/**
 * 用户信息
 */
export class User {
  id: string;
  mobile: string;
  password: string;
  nickname: string;
  introduction:string;
  gender: string;
  birthday: any;
  parentArea: string;
  subArea: string;
  height: string;
  weight:string;
  education: string;
  profession:string;
  income: string;
  profile: string;
  originalProfile:string;
  banner: string;
  houseAvailable:string;
  charisma:number;


  eatHot:string;
  smoking:string;
  drinking:string;
  housework:string;
  shopping:string;
  movie:string;
  animal:string;
  game:string;


  criterionAge:string;
  criterionHeight:string;
  criterionWeight:string;
  criterionParentArea:string;
  criterionEducation:string;
  criterionProfession:string;
  criterionIncome:string;
  criterionHouseAvailable:string;
}

export class UserInfo extends User{
  age:number;
  start:string;
  chineseZodiac:string;
}
/**
 * 用户简单信息
 */
export  class SimplenessUserInfo{
  id:string;
  nickname:string;
  profile:string;
  age:number;
  height:number;
  income:string;
  parentArea:string;
  subArea:string;
  introduction;
}

/**
 * 用户中信息
 */
export class CenterInfo {

  /**
   * 访问的个人空间是否是自己的
   */
  mine: boolean;

  /**
   * 访问的个人空间的用户是否拥有情侣
   */
  hasHalf: boolean;

  /**
   * 墙纸
   */
  banner: string;
  originalBanner:string;
  /**
   * 点赞数
   */
  thumbsCount: number;

  /**
   * 用户头像
   */
  profile: string;
  originalProfile:string;
  /**
   * 另一半头像
   */
  halfProfile: string;

  /**
   * 昵称
   */
  nickname: string;

  /**
   * 另一半昵称
   */
  halfNickname: string;

  constructor() {
    this.banner = "static/half-banner.png";
    this.profile = "static/profile.png";
  }
}

/**
 * 主页标题用户信息
 */
export class TitleUserInfo{
  id:string;
  nickname:string;
  profile:string;
  constructor(){
    this.profile = "static/profile.png";
  }
}


