import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortDesc'
})
export class SortDescPipe implements PipeTransform {
  transform(array: Array<any>, property: string): Array<any> {
    array.sort((a: any, b: any) => {
      if (a[property] < b[property]) {
        return 1;
      } else if (a[property] > b[property]) {
        return -1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
