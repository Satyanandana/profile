import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], args?: String): any[] {
    let result: any[] = [];
    const sortType: String = args || 'ASC';

    if (!Array.isArray(value)) {
      return [value];
    }

    if (sortType === 'ASC') {
      result = value.sort();
    } else if (sortType === 'DESC') {
      result = value.sort().reverse();
    }
    return result;
  }

}
