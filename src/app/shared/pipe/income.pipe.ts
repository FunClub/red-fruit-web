import { Pipe, PipeTransform } from '@angular/core';

/**
 * 收入管道，转换收入
 */
@Pipe({
  name: 'income'
})
export class IncomePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value==="0"){
      return "3000元以下"
    }
    if(value==="1"){
      return "3000-5000元"
    }
    if(value==="2"){
      return "5000-10000元"
    }
    if(value==="3"){
      return "10000-20000元"
    }
    if(value==="4"){
      return "20000-50000元"
    }
    if(value==="5"){
      return "50000元以上"
    }
  }

}
