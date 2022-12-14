import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-file',
        items: [
          {
            label: 'textos y flechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dolar',
            routerLink: 'numeros',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes',
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        routerLink: 'ordenar',
      },
    ];
  }
}
