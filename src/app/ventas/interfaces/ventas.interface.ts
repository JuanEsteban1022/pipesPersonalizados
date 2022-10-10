export enum Tipado {
    // 0        1
    dinamico, estatico
}

export interface Lenguajes{
    nombre: string;
    tipado: Tipado;
    anio: number;
}