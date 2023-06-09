import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indexLetter',
})
export class IndexLetterPipe implements PipeTransform {
  transform(value: number): string {
    return String.fromCharCode(value + 97);
  }
}
