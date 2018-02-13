import { Pipe, PipeTransform } from '@angular/core';

/**
 * 父级区域管道
 */
@Pipe({
  name: 'parentArea'
})
export class ParentAreaPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if(value!='-1'&&value){
      return value.split("-")[1];
    }else{
      return "未填写";
    }
  }

}
