import { Pipe, PipeTransform } from '@angular/core';
// tslint:disable-next-line: use-pipe-transform-interface
@Pipe({
  name: 'searchByName',
  pure: false
})

export class SearchFilter implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }
    if (!field || !value) {
      return items;
    }
// tslint:disable-next-line: only-arrow-functions
    return items.filter(function(Product) {
      return Product.title.toLowerCase().includes(value.toLowerCase());
    });
  }
}
