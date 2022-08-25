/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';
import {cuentaAhorro} from './cuentaAhorro.js';
import { cuenta } from './cuenta.js';


const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new cuenta('corriente', cliente, '1', '001', 0);
const cuentaDeMaria = new cuenta('corriente', cliente2,'2','002');

const cuentaAhorroLeonardo = new cuenta('ahorro', cliente, '9985', '001', 0);

console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(70);
console.log(cuentaDeLeonardo.verSaldo());

console.log(cuentaAhorroLeonardo);
cuentaAhorroLeonardo.depositoEnCuenta(1000);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retirarDeCuenta(370);
console.log(cuentaAhorroLeonardo.verSaldo());