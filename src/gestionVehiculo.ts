export interface Vehiculo {
  marca: string;
  modelo: string;
  año: number;
  encender(): void;
  apagar(): void;
}

export const auto: Vehiculo = {
  marca: 'Toyota',
  modelo: 'Corolla',
  año: 2021,
  encender() {
    console.log(`${this.marca} ${this.modelo} ha sido encendido.`);
  },
  apagar() {
    console.log(`${this.marca} ${this.modelo} ha sido apagado.`);
  }
};

export const vehiculo1: Vehiculo = {
  marca: 'Honda',
  modelo: 'Civic',
  año: 2020,
  encender() {
    console.log('Honda Civic encendido');
  },
  apagar() {
    console.log('Honda Civic apagado');
  }
};

export const vehiculo2: Vehiculo = {
  marca: 'Ford',
  modelo: 'Focus',
  año: 2019,
  encender() {
    console.log('Ford Focus encendido');
  },
  apagar() {
    console.log('Ford Focus apagado');
  }
};

export function imprimirVehiculos() {
  const vehiculos = [auto, vehiculo1, vehiculo2];

  // Muestra una tabla en la consola con los detalles de los vehículos
  console.table(
    vehiculos.map(vehiculo => ({
      Marca: vehiculo.marca,
      Modelo: vehiculo.modelo,
      Año: vehiculo.año
    }))
  );
}
