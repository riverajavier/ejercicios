// inventarioVehiculos.ts
export interface Motor {
  tipo: string;
  potencia: string;
}

export interface Carro {
  marca: string;
  modelo: string;
  motor: Motor;
}

export interface EmpleadoVenta {
  nombre: string;
  carrosVendidos: Carro[];
}

export const empleado: EmpleadoVenta = {
  nombre: 'Carlos López',
  carrosVendidos: [
    { marca: 'Toyota', modelo: 'Corolla', motor: { tipo: 'Gasolina', potencia: '130hp' } },
    { marca: 'Honda', modelo: 'Civic', motor: { tipo: 'Híbrido', potencia: '110hp' } }
  ]
};

export function mostrarCarrosVendidos(carrosLista: HTMLTableSectionElement | null) {
  // Verifica si carrosLista no es null antes de intentar usarla
  if (!carrosLista) {
    console.error('El elemento "carrosLista" no se encontró en el DOM.');
    return;
  }

  // Utilizamos los carros vendidos por el empleado
  empleado.carrosVendidos.forEach(carro => {
    carrosLista.innerHTML += `
      <tr>
        <td>${carro.marca}</td>
        <td>${carro.modelo}</td>
        <td>${carro.motor.tipo}</td>
        <td>${carro.motor.potencia}</td>
      </tr>
    `;
  });
}
