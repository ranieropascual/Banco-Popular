import { cuenta } from "./cuenta.js";

export class cuentaAhorro extends cuenta {

    sconstructor(cliente, numero, agencia,saldo) {
        super(cliente,numero,agencia,saldo);
        CuentaCorriente.cantidadCuentas++;
    }
}
