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

  /**
   * 点赞数
   */
  thumbsCount: number;

  /**
   * 用户头像
   */
  profile: string;

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
}

/**
 * 用户信息
 */
export class User {
  id: string;
  mobile: string;
  password: string;
  nickname: string;
  gender: string;
  birthday: any;
  parentArea: string;
  subArea: string;
  height: string;
  education: string;
  income: string;
  profile: string;
  originalProfile:string;
  banner: string;
}

