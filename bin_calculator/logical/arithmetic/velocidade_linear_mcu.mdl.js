"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.velocidadeLinearMCU = void 0;
const arithmetic_lib_1 = require("../../arithmetic.lib");
var velocidadeLinearMCU = (frequencia, raio) => {
    let resultado = (2 * arithmetic_lib_1.Aritmeticos.Consts.c_pi * frequencia) * raio;
    return resultado;
};
exports.velocidadeLinearMCU = velocidadeLinearMCU;
//# sourceMappingURL=velocidade_linear_mcu.mdl.js.map