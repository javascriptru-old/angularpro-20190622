import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: false
})
export class ReversePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    console.log('transform');
    return value.split('').reverse().join('');
  }

}

/***
pure functions

fucntion sum(a,b) {
  return a + b;
}
*/
