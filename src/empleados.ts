export interface Habilidad {
  nombre: string;
  nivel: string;
}

export interface Empleado {
  nombre: string;
  puesto: string;
  habilidades: Habilidad[];
}

export interface Proyecto {
  nombre: string;
  descripcion: string;
  empleados: Empleado[];
}

export const empleados: Empleado[] = [
  {
    nombre: 'Juan Pérez',
    puesto: 'Desarrollador Frontend',
    habilidades: [
      { nombre: 'JavaScript', nivel: 'Avanzado' },
      { nombre: 'React', nivel: 'Intermedio' }
    ]
  },
  {
    nombre: 'María Gómez',
    puesto: 'Diseñadora UX/UI',
    habilidades: [
      { nombre: 'Figma', nivel: 'Avanzado' },
      { nombre: 'Adobe XD', nivel: 'Intermedio' }
    ]
  }
];

export const proyectos: Proyecto[] = [
  {
    nombre: 'Sistema de Gestión',
    descripcion: 'Un sistema para gestionar empleados y proyectos.',
    empleados: [empleados[0], empleados[1]]
  }
];

// Función para mostrar el proyecto y los empleados en una tabla
export function mostrarProyecto(proyectoDiv: HTMLDivElement | null, empleadosTabla: HTMLTableSectionElement | null) {
  const [proyecto1] = proyectos;

  // Mostrar información del proyecto
  if (proyectoDiv) {
    proyectoDiv.innerHTML = `
      <h3>${proyecto1.nombre}</h3>
      <p>${proyecto1.descripcion}</p>
    `;
  }

  // Mostrar empleados en una tabla
  if (empleadosTabla) {
    proyecto1.empleados.forEach(empleado => {
      empleadosTabla.innerHTML += `
        <tr>
          <td>${empleado.nombre}</td>
          <td>${empleado.puesto}</td>
          <td>${empleado.habilidades.map(habilidad => `${habilidad.nombre} (Nivel: ${habilidad.nivel})`).join(', ')}</td>
        </tr>
      `;
    });
  }
}
