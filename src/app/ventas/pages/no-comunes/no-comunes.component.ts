import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Hola mundo!!';
  genero: string = 'masculino';

  invitacionMap = {
    masculino: 'Bienvenido',
    femenino: 'Bienvenida',
  };

  cambiarCliente() {
    if (this.genero === 'femenino') {
      this.nombre = 'Juan';
      this.genero = 'masculino';
    } else {
      (this.nombre = 'Melissa'), (this.genero = 'femenino');
    }
  }

  //i18nPlural
  developers: string[] = ['Paco', 'Pedro', 'Juan', 'Felipe', 'Luz'];

  developersMap = {
    '=0': 'No hay developers',
    '=1': 'hay 1 developers que es ingeniero',
    '=2': 'hay 2 developers que son ingenieros',
    // Se utiliza el # para indicar el numero total de elementos que hay en el arreglo
    other: 'tenemos # developers que son ingenieros',
  };

  eliminarDeveloper() {
    this.developers.pop();
  }

  // KeyValue
  persona = {
    nombre: 'Juan',
    edad: 26,
    pais: 'colombia',
  };

  // JSON
  lenguajes = [
    {
      nombre: 'JavaScript',
      tipado: 'dinámico',
    },
    {
      nombre: 'Java',
      tipado: 'estático',
    },
    {
      nombre: 'Python',
      tipado: 'dinámico',
    },
    {
      nombre: 'PHP',
      tipado: 'dinámico',
    },
  ];

  // Async
  myObservable = interval(1000); // Es un Observable que emitira valor númericos: 0, 1, 2...
  // Creación de promesa
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa');
    }, 3500);
  });
}
