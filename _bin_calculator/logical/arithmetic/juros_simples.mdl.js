"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jurosSimples = void 0;
var jurosSimples = (valor, taxa, tempo) => {
    let resultado = valor * (1 + taxa * tempo);
    return resultado;
};
exports.jurosSimples = jurosSimples;
//# sourceMappingURL=juros_simples.mdl.js.map