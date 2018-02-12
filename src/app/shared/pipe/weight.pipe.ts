import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight'
})
export class WeightPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value==="-1"){
      return "未填写"
    }
    if(value==="0"){
      return "80斤以下"
    }
    if(value==="1"){
      return "80-90斤"
    }
    if(value==="2"){
      return "90-100斤"
    }
    if(value==="3"){
      return "100-110斤"
    }
    if(value==="4"){
      return "110-120斤"
    }
    if(value==="5"){
      return "130-140斤"
    }
    if(value==="6"){
      return "140-150斤"
    }
    if(value==="7"){
      return "150斤以上"
    }
  }

}
