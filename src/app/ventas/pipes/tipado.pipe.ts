import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipado',
})
export class tipadoPipe implements PipeTransform {
  transform(valor: boolean): string {
    return valor ? 'estatico' : 'dinamico';
  }
}
