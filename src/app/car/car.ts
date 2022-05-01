export class Car {
  id: number;
  marca: string;
  linea: string;
  referencia: string;
  color: string;
  imagen: string;
  modelo: number;
  kilometraje: number;

 constructor(
    id: number,
    marca: string,
    linea: string,
    referencia: string,
    color: string,
    imagen: string,
    modelo: number,
    kilometraje: number
  ) {
    this.id = id;
    this.marca = marca;
    this.linea = linea;
    this.referencia = referencia;
    this.color = color;
    this.imagen = imagen;
    this.modelo = modelo;
    this.kilometraje = kilometraje;
  }
}
