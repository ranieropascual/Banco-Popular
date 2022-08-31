/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Empleado } from './empleados/empleado.js';
import { Director } from './empleados/director.js';
import { Gerente } from './empleados/gerente.js';
import { sistemaAutenticacion } from './sistemaAutenticacion.js';

//const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado ('juan perez','1234343',10000);
empleado.asignarClave('12345');
console.log(sistemaAutenticacion.login(empleado,'12345'));


const gerente = new Gerente('pedro rivas','232344',12000);
gerente.asignarClave('655');
console.log(sistemaAutenticacion.login(gerente,'6556')); 

//const director = new Director('elena moreno','232323',15000);

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('1111');

console.log(sistemaAutenticacion.login(cliente,'1111'));






