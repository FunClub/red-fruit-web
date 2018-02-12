import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullPlaceholder'
})
export class NullPlaceholderPipe implements PipeTransform {

  transform(value: any, suffixes?: any): any {

    return value=='-1'?"未填写":value;
  }

}
