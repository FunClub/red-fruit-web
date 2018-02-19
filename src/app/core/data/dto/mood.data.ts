import {ShortUserInfo} from '../vo/user.data';

export class Trend{


  /**
   * 发表动态的用户id
   */
  userId:string;

  /**
   * 发布时间
   */
  date:string;

  /**
   * 点赞数
   */
  thumbCount:number;

  /**
   * 评论数
   */
  discussionCount:number;

  /**
   * 是不是个人可见
   */
  isPrivate:boolean;

  /**
   * 点赞用户 id
   */
  thumbUserIds:string[];
}
/**
 * 心情
 */
export class Mood extends Trend{
  /**
   * 内容
   */
  content:string;

  /**
   * 图片
   */
  imgs:string[]=[];

  /**
   * 视频
   */
  video:string;
}

/**
 * 心情信息
 */
export class MoodInfo extends Mood{

  /**
   * 用户简短信息
   */
  shortInfo:ShortUserInfo;
  /**
   * 短时间
   */
  shortDate:string;

  /**
   * 好久之前发送的
   */
  howLongAgo:string;

  /**
   * 能否点赞
   */
  thumbAble:boolean;
}


