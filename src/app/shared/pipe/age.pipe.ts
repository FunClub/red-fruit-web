import { Pipe, PipeTransform } from '@angular/core';
/**
 * 年龄管道，转换年龄
 */
@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value==="-1"){
      return "未填写"
    }
    if(value==="0"){
      return "20岁以下"
    }
    if(value==="1"){
      return "20-24岁"
    }
    if(value==="2"){
      return "25-29岁"
    }
    if(value==="3"){
      return "30-34岁"
    }
    if(value==="4"){
      return "25-40岁"
    }
    if(value==="5"){
      return "40岁以上"
    }
  }

}
