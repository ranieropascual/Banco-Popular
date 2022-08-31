export class empleado {
    #nombre;
    #dni;
    #salario;
    #clave;

    constructor (nombre, dni, salario) {
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
        this.#clave = '';
    }

asignarClave(clave){
    this.#clave = clave;
}

get clave() {
    return this.#clave;
}

    _verBonificacion(){
        return this.#salario;
    }

    _verBonificacion(bono){
        return this.#salario + this.#salario*bono/100;
    }
}