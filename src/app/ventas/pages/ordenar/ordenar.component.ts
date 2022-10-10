import { Component } from '@angular/core';
import { Lenguajes, Tipado } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  enMayusculas: boolean = false;
  ordenarPor: string = '';

  lenguajes: Lenguajes[] = [
    {
      nombre: 'JavaScript',
      tipado: Tipado.dinamico,
      anio: 1995,
    },
    {
      nombre: 'Python',
      tipado: Tipado.dinamico,
      anio: 1991,
    },
    {
      nombre: 'Java',
      tipado: Tipado.estatico,
      anio: 1995,
    },
  ];

  onMayusculas() {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
    console.log(valor);
  }
}
