import { Pipe, PipeTransform } from '@angular/core';
import { Lenguajes } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(
    lenguajes: Lenguajes[],
    ordenarPor: string = 'sin valor'
  ): Lenguajes[] {
    switch (ordenarPor) {
      case 'nombre':
        return (lenguajes = lenguajes.sort((a, b) =>
          a.nombre > b.nombre ? 1 : -1
        ));
      case 'tipado':
        return lenguajes = lenguajes.sort((a, b) => (a.tipado > b.tipado ? 1 : -1));
      case 'año':
        return lenguajes = lenguajes.sort((a, b) => (a.anio > b.anio ? 1 : -1));

      default:
        return lenguajes;
    }
  }
}
