import { Pipe, PipeTransform } from '@angular/core';
/**
 *  推荐度管道，转换推荐度
 */
@Pipe({
  name: 'recommendedPercent'
})
export class RecommendedPercentPipe implements PipeTransform {

  transform(value: string,  index?: any): any {
    value = ""+value;
    if(value.length==1){
      return value
    }
   return value.substring(index,index+1);
  }

}
