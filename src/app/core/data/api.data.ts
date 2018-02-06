
/**
 *
 * 用户业务api
 */
const businessUserPrefix = "/business/user/";
export class BusinessUserApi{

  /**
   * 注册api地址
   * @type {string}
   */
  registerPath = businessUserPrefix+'register/';

  /**
   * 获得手机号验证api地址
   * @param {string} mobile
   * @returns {string}
   */
  public getVerifyMobilePath(mobile:string){
    return businessUserPrefix+`register/verifyMobile/${mobile}`;
  }

  /**
   * 获得手机号验证码api地址
   * @param {string} mobile
   * @returns {string}
   */
  public getMobileVerificationCodePath(mobile:string){
    return businessUserPrefix+`register/mobileVerificationCode/${mobile}`
  }

  /**
   * 获得昵称验证api地址
   * @param {string} nickname
   * @returns {string}
   */
  public getVerifyNicknamePath(nickname:string){
    return businessUserPrefix+`register/verifyNickname/${nickname}`
  }
}
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

  /**
   * 获取父级区域集合api地址
   * @param leave 行政区域等级（0: 省级 1:市级 2:县级 3:镇级 4:乡村级）
   * @param pageNumber 页码，从1开始
   * @param pageSize 每页区域数
   * @return {string}
   */
  public getParentAreaPath(leave:string,pageNumber:string,pageSize:string){
    return businessSharedPrefix+`parent/${leave}/${pageNumber}/${pageSize}`
  }

  /**
   * 获取指定id的子级区域集合
   * @param parentId 父级区域id
   * @return 区域集合
   * @throws Exception
   */
  public getSubAreaPath(parentId:string){
    return businessSharedPrefix+`sub/${parentId}`
  }
}
