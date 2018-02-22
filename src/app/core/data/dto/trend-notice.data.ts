/**
 *  动态通知模型
 */
import {ShortUserInfo} from './user.data';
import {ParentDiscussionInfo} from './discussion';
import {TrendArgs} from '../app.data';

export class TrendNotice{

  /**
   * 动态通知所属用户 Id
   */
  noticeUserId:string;

  /**
   * 生成此动态通知的用户id
   */
  makeNoticeUserId:string;

  /**
   * 通知类型，点赞，评论，回复等
   */
  trendNoticeType:string;

  /**
   * 动态类型
   */
  trendType:string;

  /**
   * 动态 Id
   */
  trendId:string;

  /**
   * 动态的内容
   */
  trendContent:string;

  /**
   * 通知的内容
   */
  trendNoticeContent:string;

  /**
   * 动态的图片
   */
  trendImg:string;

  /**
   * 评论 id
   */
  discussionId:string;

}
/**
 *  动态通知信息模型
 */
export class TrendNoticeInfo extends TrendNotice{
  /**
   * 简短时间
   */
  shortDate:string;

  /**
   * 分门别类时间
   */
  sortDate:string;

  /**
   * 生成此动态通知的用户简短信息
   */
  makeNoticeShortInfo:ShortUserInfo;

  /**
   * 父级评论信息
   */
  parentDiscussionInfo:ParentDiscussionInfo;

  /**
   * 动态操作参数
   */
  trendArgs:TrendArgs;
}
