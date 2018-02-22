/**
 * 分页的数据信息
 * T：数据
 */
export interface PagedInfo<T>{
  /**
   * 数据总数
   */
  totals:number;

  /**
   *
   */
  hasNext:boolean;
  data:T;
}
