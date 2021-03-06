/**
 * 消息 api
 */
const messagePrefix = "/message/trend-notice/";
export class  MessageApi{
  /**
   * 查询动态通知
   */
  selectTrendNoticePath = messagePrefix;
}

/**
 * 心情 api
 */
const moodPrefix = "/trend/mood/";
export class MoodApi{

  /**
   * 通过个人中心查询心情
   * @type {string}
   */
  getByCenterPath:string = moodPrefix+"center";
  /**
   * 创建心情 api地址
   * @type {string}
   */
  createMoodPath:string = moodPrefix;
}

/*用户搜索api*/
const searchPrefix = "/user/search/";
export class SearchApi{

  /**
   * 用户择偶条件信息api地址
   * @type {string}
   */
  userCriterionInfoPath = searchPrefix+"criterion";

  /**
   * 搜索用户信息api地址
   * @type {string}
   */
  searchedUserInfoPath = searchPrefix;
}

/*个人资料api*/
const infoPrefix = "/user/info/";
export class InfoApi{

  /**
   * 获得验证昵称是否可被更新api地址
   * @param {string} nickname
   * @returns {string}
   */
  nicknameCanUpdatePath = infoPrefix+'nickname';


  /**
   * 获取用户全部信息的api地址
   * @param {string} userId
   * @returns {string}
   */
  getAllUserInfoPath(userId:string){
    return infoPrefix+userId;
  }

  /**
   * 获取更新用户信息api
   * @type {string}
   */
  updateUserInfoPath = infoPrefix;
}

/*个人中心api*/
const centerPrefix="/user/center/";
export class CenterApi{

  /**
   * 获取个人中心api
   * @param {string} centerUserId
   * @returns {string}
   */
  getCenterPath(centerUserId:string) {
    return centerPrefix + centerUserId;
  }

  /**
   * 上传头像或者壁纸的api
   * @type {string}
   */
  profile:string = centerPrefix+"profile";
}
/**
 * 登录api
 */
const loginPrefix = "/user/login/";
export class LoginApi{
  loginPath:string = loginPrefix;
  isLoginPath:string = loginPrefix+"status"
}

/**
 *
 * 用户注册api
 */
const registerPrefix = "/user/register/";
export class RegisterApi{

  /**
   * 注册api地址
   * @type {string}
   */
  registerPath = registerPrefix;

  /**
   * 获得验证用户是否存在api地址
   * @returns {string}
   */
  public getIsUserExitsPath(){
    return registerPrefix+`isUserExits`;
  }

  /**
   * 获得手机号验证码api地址
   * @param {string} mobile
   * @returns {string}
   */
  public getMobileVerificationCodePath(mobile:string){
    return registerPrefix+`mobileVerificationCode/${mobile}`;
  }



  public  verificationCodePath = registerPrefix+"verificationCodeImg";
  /**
   * 获取验证验证码的正确性的api地址
   * @param {string} code 用户输入的验证码
   * @returns {string}
   * @constructor
   */
  public getVerifyImgVerificationCodePath(code:string){
    return registerPrefix+`verifyImgVerificationCode/${code}`;
  }
}

/**
 * 共享api
 */
const sharedPrefix = "/shared/";
const weChatPrefix= "/api/wechat/";
export class SharedApi {
  /**
   * 获取点赞 api 地址
   *
  */
  thumbPath = sharedPrefix+"thumb";
  /**
   * 获取取消点赞 api 地址
   * @param {string} targetId 目标id
   * @returns {string}
   */
  getThumbPath(targetId:string){
    return  sharedPrefix +`thumb/${targetId}`;
  }

  /**
   * 添加子评论
   */
  createSubDiscussionPath = sharedPrefix+"subDiscussion";
   /**
   * 查询父级评论 api 地址
   * @type {string}
   */
  selectParentDiscussionPath = sharedPrefix+"parentDiscussion";
  /**
   * 添加父评论
   */
  createParentDiscussionPath = sharedPrefix+"parentDiscussion";
  /**
   * 获取文章列表Api 地址
   * @param channelId 频道ID
   * @param startIndex 文章开始索引
   * @param amountOfArticle  文章数量
   */
  getArticlesPath(channelId:string,startIndex:string,amountOfArticle:string){
    return weChatPrefix+`article/${channelId}/${startIndex}/${amountOfArticle}`;
  }
  /**
   * 删除文件 Api 地址
   * @type {string}
   */
  deletePath:string = sharedPrefix+"file"
  /**
   * 获得上传文件api地址
   * @param {string} folder
   * @returns {string}
   */
  getUploadPath(folder:string){
    return sharedPrefix+ `file/${folder}`;
  }
  titleUserInfoPath:string = sharedPrefix+"titleUser";
  /**
   * 获取父级区域集合api地址
   * @param leave 行政区域等级（0: 省级 1:市级 2:县级 3:镇级 4:乡村级）
   * @param pageNumber 页码，从1开始
   * @param pageSize 每页区域数
   * @return {string}
   */
  public getParentAreaPath(leave:string,pageNumber:string,pageSize:string){
    return sharedPrefix+`parent/${leave}/${pageNumber}/${pageSize}`
  }

  /**
   * 获取指定id的子级区域集合
   * @param parentId 父级区域id
   * @return 区域集合
   * @throws Exception
   */
  public getSubAreaPath(parentId:string){
    return sharedPrefix+`sub/${parentId}`
  }
}
