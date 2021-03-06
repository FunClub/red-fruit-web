import { Pipe, PipeTransform } from '@angular/core';

/**
 * 图片路径管道
 * 为指定图片路径加上自定义域名和样式名
 */
@Pipe({
  name: 'imgPath'
})
export class ImgPathPipe implements PipeTransform {

  transform(value: any, style?: any): any {
    if(style){
      return "http://taomei1314.com/"+value+"?x-oss-process=style/"+style
    }
    return "http://taomei1314.com/"+value;
  }

}
