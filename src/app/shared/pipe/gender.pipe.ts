import { Pipe, PipeTransform } from '@angular/core';

/**
 * 性别管道
 * 把1转换为男，把0转换为女
 */
@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value=="1"?"男":"女";
  }

}
