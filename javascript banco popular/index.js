/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { empleado } from './empleados/empleado.js';
import { director } from './empleados/director.js';
import { gerente } from './empleados/gerente.js';
import { sistemaAutenticacion } from './sistemaAutenticacion.js';

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('1111');
console.log(sistemaAutenticacion.login(cliente,'1111'));
//const cliente2 = new Cliente('María','16979808','8989');

const empleado = new empleado('juan perez','1234343',10000);
empleado.asignarClave('12345');
console.log(sistemaAutenticacion.login(empleado,'12345'));


const gerente = new gerente('pedro rivas','232344',12000);
gerente.asignarClave('6556');
console.log(sistemaAutenticacion.login(gerente,'6556')); 

const director = new director('elena moreno','232323',15000);






