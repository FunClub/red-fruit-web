import {User} from '../vo/user.data';
/**
 * 分页参数
 */
class Page{

  /**
   * 当前是第一页，从1开始
   */
  current:number;

  /**
   * 每页多少数据
   */
  size:number;

  constructor() {
    this.current = 1;
    this.size = 4;
  }
}

/**
 * 分页命令
 */
export class PageComm{

  /**
   * 分页参数
   */
  page:Page;

  /**
   * 分页条件
   */
  condition:any;

  constructor() {
    this.page = new Page();
  }
}

