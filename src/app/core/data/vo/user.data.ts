/**
 * 用户简短信息
 */
export class ShortUserInfo{
  /**
   * 用户id
   */
  userId:string;

  /**
   * 昵称
   */
  nickname:string;

  /**
   * 头像
   */
  profile:string;
}
/**
 * 搜索出来的用户信息
 */
export  class SearchedUserInfo{
  userId:string;
  /**
   * 昵称
   */
  nickname:string;
  /**
   * 头像
   */
  profile:string;

  /**
   * 身高
   */
  height:number;

  /**
   * 体重
   */
  weight:number;

  /**
   * 年龄
   */
  age:number;
  /**
   * 居住地父级区域
   */
  parentArea:string;
  /**
   * 教育程度
   */
  education:string;

  /**
   * 月收入
   */
  income:string;

  /**
   * 年龄范围
   */
  criterionAge:string;

  /**
   * 身高范围
   */
  criterionHeight:string;

  /**
   * 意向对方城市，值为-1则为任意城市
   */
  criterionParentArea:string;

  /**
   * 收入范围
   */
  criterionIncome:string;

  /**
   * 推荐理由
   */
  recommendedReason:string;

  /**
   * 推荐度
   */
  recommendedPercent:string;
}
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
 * 用户的择偶信息
 */
export class UserCriterionInfo{
  /**
   * 对方性别
   */
  halfGender:string;
  criterionAge:string;
  criterionHeight:string;
  criterionWeight:string;
  criterionParentArea:string;
  criterionEducation:string;
  criterionProfession:string;
  criterionIncome:string;
  criterionHouseAvailable:string;
}
/**
 * 用户信息
 */
export class User extends UserCriterionInfo{
  userId: string;
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
  userId:string;
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
   * 个人空间用户 id,
   */
  userId:string;
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
  userId:string;
  nickname:string;
  profile:string;
  constructor(){
    this.profile = "static/profile.png";
  }
}


