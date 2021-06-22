import { Vacancy } from './../models/Vacancy';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oppFilter'
})
export class OppFilterPipe implements PipeTransform {

  transform(items: Vacancy[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.title.toLocaleLowerCase().includes(searchText);
    });
  }
}
