import { Pipe, PipeTransform } from '@angular/core';

// write tests for the CorrectFirstPipe
@Pipe({
  name: 'correctFirst'
})
export class CorrectFirstPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
