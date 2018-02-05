/**
 * 共享业务api
 */
const businessSharedPrefix = "/business/shared/";
export class BusinessSharedApi {

  public  verificationCodePath = businessSharedPrefix+"verificationCodeImg";
  /**
   * 获取验证验证码的正确性的api地址
   * @param {string} code 用户输入的验证码
   * @returns {string}
   * @constructor
   */
  public getVerifyImgVerificationCodePath(code:string){
    return businessSharedPrefix+`verifyImgVerificationCode/${code}`;
  }
}

/**
 *
 * 用户业务api
 */
const businessSharedPrefix = "/business/user/";
export class BusinessUserApi{

  /**
   * 手机号验证
   * @param {string} mobile
   * @returns {string}
   */
  public getVerifyMobilePath(mobile:string){
    return businessSharedPrefix+`register/verifyMobile/${mobile}`;
  }
}
