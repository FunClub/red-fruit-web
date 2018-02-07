/**
 * 登录api
 */
const loginPrefix = "/user/login/";
export class LoginApi{
  loginPath:string = loginPrefix;
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
export class SharedApi {

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
