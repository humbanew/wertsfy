"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valorMinimo = void 0;
var valorMinimo = (x) => {
    let min = x[0];
    for (let i = 1; i < x.length; i++) {
        if (x[i] < min) {
            min = x[i];
        }
    }
    return min;
};
exports.valorMinimo = valorMinimo;
//# sourceMappingURL=valor_minimo.mdl.js.map