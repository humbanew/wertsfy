"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fatorial = void 0;
var fatorial = (x) => {
    let resultado = 1;
    if (x == 0) {
        return resultado = 1;
    }
    for (let i = x; i > 0; i--) {
        resultado = i * resultado;
    }
    ;
    return resultado;
};
exports.fatorial = fatorial;
//# sourceMappingURL=fatorial.mdl.js.map