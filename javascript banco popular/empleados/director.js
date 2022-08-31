import {empleado} from "./empleado.js";

export class director extends empleado {
    constructor(nombre,dni,salario) {
        super(nombre,dni,salario);
    }

    _verBonificacion(bono){
        const bono = 10;
        return super.verBonificacion(bono);
    }
}