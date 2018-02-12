import {Pipe, PipeTransform} from '@angular/core';

/**
 * 教育管道，转换职业
 */
@Pipe({
  name: 'profession'
})
export class ProfessionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === '-1') {
      return '未填写';
    }
    if (value === '0') {
      return '学生';
    }
    if (value === '1') {
      return '白领';
    }
    if (value === '2') {
      return '全职太太';
    }
    if (value === '3') {
      return '个体户';
    }
    if (value === '4') {
      return '主播';
    }
    if (value === '5') {
      return '老师';
    }
    if (value === '6') {
      return '经理';
    }
    if (value === '7') {
      return '厨师';
    }
    if (value === '8') {
      return '老板';
    }
    if (value === '9') {
      return '房东';
    }
  }

}
