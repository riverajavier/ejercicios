import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';

// Importa las funciones necesarias
import { imprimirVehiculos } from './gestionVehiculo.ts';
import { mostrarProyecto } from './empleados.ts';
import { mostrarCarrosVendidos } from './inventarioVehiculos.ts';
import { mostrarDatosPersona } from './desestructuracionInterfaces.ts';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Haga clic en los logotipos de Vite y TypeScript para obtener más información
    </p>

    <!-- Contenedor para el proyecto -->
    <h2>Sistema de Gestión de Empleados y Proyectos</h2>
    <div id="proyecto"></div>

    <!-- Tabla para mostrar empleados -->
    <table id="empleados-tabla" border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Puesto</th>
          <th>Habilidades</th>
        </tr>
      </thead>
      <tbody id="empleados-lista"></tbody>
    </table>

    <!-- Tabla para vehículos vendidos -->
    <h2>Inventario de Vehículos Vendidos</h2>
    <table id="carros-tabla" border="1">
      <thead>
        <tr>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Tipo de Motor</th>
        </tr>
      </thead>
      <tbody id="carros-lista"></tbody>
    </table>

    <!-- Tabla para los datos de la persona -->
    <h2>Datos de la Persona</h2>
    <table id="persona-tabla" border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Puesto</th>
        </tr>
      </thead>
      <tbody id="persona-info"></tbody>
    </table>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

// Proyecto y empleados
const proyectoDiv = document.querySelector<HTMLDivElement>('#proyecto');
const empleadosTabla = document.querySelector<HTMLTableSectionElement>('#empleados-lista');
mostrarProyecto(proyectoDiv, empleadosTabla);


// Vehículos vendidos
const carrosLista = document.querySelector<HTMLTableSectionElement>('#carros-lista');
mostrarCarrosVendidos(carrosLista);

// Datos de la persona
const personaInfo = document.querySelector<HTMLTableSectionElement>('#persona-info');
mostrarDatosPersona(personaInfo);

// Imprime los vehículos en consola
imprimirVehiculos();
