/**
 *  动态通知模型
 */
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
