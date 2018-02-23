
import {TrendNotice} from './trend-notice.data';
import {ShortUserInfo} from './user.data';
/**
 * 添加父级评论的模型
 */
export class InsertParentDiscussion {
  parentDiscussion:ParentDiscussion;
  trendNotice:TrendNotice;

  constructor() {
    this.parentDiscussion = new ParentDiscussion();
    this.trendNotice = new TrendNotice();
  }
}

/**
 * 查询评论模型
 */
export class QueryDiscussionComm{
  /**
   * 动态 Id
   */
  trendId:string;
  /**
   * 排序规则
   */
  sortBy:string;
  constructor(){
    this.sortBy = "sub_discussion_count";
  }
}

export class ParentDiscussion{
  /**
   * 动态 Id
   */
  trendId:string;


  /**
   * 发表的内容
   */
  content:string;

}

/**
 * 显示评论模型
 */
export class ParentDiscussionInfo {

  /**
   *  父级评论 Id
   */
  parentDiscussionId:string;

  /**
   * 用户 Id
   */
  userId:string;
  /**
   * 点赞数量
   */
  thumbsUpCount:string;

  /**
   * 能否点赞
   */
  thumbsUpAble:string;

  /**
   * 用户简短信息
   */
  userShortInfo:ShortUserInfo;
  /**
   * 评论内容
   */
  content:string;

  /**
   * 时间
   */
  date:string;

  /**
   * 分门别类时间
   */
  sortDate:string;

  /**
   * 简短时间
   */
  shortDate:string;

  /**
   * 子评论列表
   */
  subDiscussionInfos:SubDiscussionInfo[];

  /**
   * 点赞用户 id列表
   */
  thumbsUserId:string[];

  /**
   * 回复评论参数
   */
  replyDiscussionArgs:ReplyDiscussionArgs;
}

/**
 * 插入子评论的模型
 */
export class InsertSubDiscussion {
  subDiscussion:SubDiscussion;
  trendNotice:TrendNotice;
  constructor() {
    this.subDiscussion = new SubDiscussion();
    this.trendNotice = new TrendNotice();
  }
}
/**
 * 子评论模型
 */
export class SubDiscussion{

  /**
   * 内容
   */
  content:string="";

  /**
   * 父级评论 Id
   */
  parentDiscussionId:string;
  /**
   * 被回复的用户 id,为空则评论的父级评论，而不是某个子级评论
   */
  discussedUserId:string;

}

/**
 * 显示子评论DTO
 */
export class SubDiscussionInfo {

  parentDiscussionId:string;
  /**
   *  评论人 id
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

  /**
   * 被回复的用户 id,为空则评论的父级评论，而不是某个子级评论
   */
  discussedNickname:string;

  /**
   * 评论内容
   */
  content:string;

  /**
   * 分门别类时间
   */
  sortDate:string;

  /**
   * 简短时间
   */
  shortDate:string;

  /**
   * 回复评论参数
   */
  replyDiscussionArgs:ReplyDiscussionArgs;
}

/**
 * 回复评论参数
 */
export class ReplyDiscussionArgs{
  /**
   * 被回复的用户 id,为空则评论的父级评论，而不是某个子级评论
   */
  discussedUserId:string;

  /**
   * 被回复的的昵称
   */
  discussedNickname:string;

  /**
   * 父级评论 Id
   */
  parentDiscussionId:string;

  /**
   * 显示评论回复
   */
  showReply:boolean;

  /**
   * 是否回复父评论
   */
  replyToParent:boolean;
}
