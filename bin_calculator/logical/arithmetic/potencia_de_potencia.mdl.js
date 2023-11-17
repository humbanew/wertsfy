"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.potenciaDePotencia = void 0;
var potenciaDePotencia = (x, y) => {
    let rest;
    if (y != null) {
        let l = 0;
        for (let i = 0; i < y.length; i++) {
            l += y[i];
        }
        return rest = x ** l;
    }
    return rest;
};
exports.potenciaDePotencia = potenciaDePotencia;
//# sourceMappingURL=potencia_de_potencia.mdl.js.map