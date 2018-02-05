/**
 * 后台返回的统一数据
 */
export interface ResponseData<T> {

  /**
   * 状态码
   */
  code:number;

  /**
   * 应答消息
   */
  message:string;

  /**
   * 业务数据
   */
  data:T;
}
