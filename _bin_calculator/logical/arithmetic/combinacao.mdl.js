"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combinacao = void 0;
var combinacao = (total, divisor) => {
    let resultado = 0, totalConvertido = 1, divisorConvertido = 1;
    for (let i = total; i > 0; i--) {
        totalConvertido = totalConvertido * i;
    }
    for (let j = divisor; j > 0; j--) {
        divisorConvertido = divisorConvertido * j;
    }
    resultado = totalConvertido / (divisorConvertido * (totalConvertido - divisorConvertido));
    return resultado;
};
exports.combinacao = combinacao;
//# sourceMappingURL=combinacao.mdl.js.map