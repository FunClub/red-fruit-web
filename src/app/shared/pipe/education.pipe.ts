import { Pipe, PipeTransform } from '@angular/core';

/**
 * 教育管道，转换教育水平
 */
@Pipe({
  name: 'education'
})
export class EducationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value==="0"){
      return "大专及以下"
    }
    if(value==="1"){
      return "专科"
    }
    if(value==="2"){
      return "本科"
    }
    if(value==="3"){
      return "硕士"
    }
    if(value==="4"){
      return "博士"
    }
    if(value==="5"){
      return "博士后"
    }

  }

}
