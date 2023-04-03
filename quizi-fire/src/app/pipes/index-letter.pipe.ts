import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indexLetter'
})
export class IndexLetterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
