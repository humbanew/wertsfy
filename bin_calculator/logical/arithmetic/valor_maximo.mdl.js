"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valorMaximo = void 0;
var valorMaximo = (x) => {
    let max = x[0];
    for (let i = 1; i < x.length; i++) {
        if (x[i] > max) {
            max = x[i];
        }
    }
    return max;
};
exports.valorMaximo = valorMaximo;
//# sourceMappingURL=valor_maximo.mdl.js.map