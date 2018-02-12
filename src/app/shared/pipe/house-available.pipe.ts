import { Pipe, PipeTransform } from '@angular/core';
/**
 * 住房管道，转换住房水平
 */
@Pipe({
  name: 'houseAvailable'
})
export class HouseAvailablePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value==='-1'){
      return "未填写"
    }
    if(value==='0'){
      return "租房"
    }
    if(value==='1'){
      return "有房"
    }
    return null;
  }

}
