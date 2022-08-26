import { cuenta } from "./cuenta.js";

export class cuentaAhorro extends cuenta {

  constructor(cliente, numero, agencia,saldo) {
      super(cliente,numero,agencia,saldo);
    }
}
