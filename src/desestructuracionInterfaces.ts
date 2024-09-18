export interface Persona {
  nombre: string;
  puesto: string;
}

export const persona: Persona = {
  nombre: 'Ana Ruiz',
  puesto: 'Gerente de Proyecto'
};

export function mostrarDatosPersona(personaInfo: HTMLTableSectionElement | null) {
  // Verifica si personaInfo es null antes de usarlo
  if (!personaInfo) {
    console.error('El elemento "persona-info" no se encontró en el DOM.');
    return;
  }

  // Usa los datos del objeto 'persona' para actualizar el contenido de la tabla
  personaInfo.innerHTML = `
    <tr>
      <td>${persona.nombre}</td>
      <td>${persona.puesto}</td>
    </tr>
  `;
}
