import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtre',
})
export class FiltrePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();
    return value.filter((article: any) => {
      return JSON.stringify(article).toLowerCase().includes(article);
    });
  }
}
