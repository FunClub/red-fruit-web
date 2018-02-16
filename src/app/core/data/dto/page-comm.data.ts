import {User} from '../vo/user.data';

class Page{
  current:number;
  size:number;

  constructor() {
    this.current = 1;
    this.size = 10;
  }
}
export class PageComm{
  page:Page;
  condition:any;

  constructor() {
    this.page = new Page();
  }
}

