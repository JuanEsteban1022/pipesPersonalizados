import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class mayusculasPipe implements PipeTransform {
  transform(valor: string, enMayusculas: boolean): string {
    console.log(enMayusculas);
    // if (enMayusculas) {
    //   return valor.toUpperCase();
    // } else {
    //   return valor.toLowerCase();
    // }
    // Opción 2: ternario
    return enMayusculas ? valor.toUpperCase() : valor.toLowerCase();
  }
}
