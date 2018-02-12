import { Pipe, PipeTransform } from '@angular/core';

/**
 * 身高管道，转换身高
 */
@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value==="-1"){
      return "未填写"
    }
    if(value==="0"){
      return "150厘米以下"
    }
    if(value==="1"){
      return "150-154厘米"
    }
    if(value==="2"){
      return "155-159厘米"
    }
    if(value==="3"){
      return "160-164厘米"
    }
    if(value==="4"){
      return "165-169厘米"
    }
    if(value==="5"){
      return "170-174厘米"
    }
    if(value==="6"){
      return "175-179厘米"
    }
    if(value==="7"){
      return "180-184厘米"
    }
    if(value==="8"){
      return "185-190厘米"
    }
    if(value==="9"){
      return "190厘米以上"
    }
  }

}
