"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arcoSenoHiperbolico = void 0;
const arithmetic_lib_1 = require("../../arithmetic.lib");
var arcoSenoHiperbolico = (x) => {
    return 1 / (((2 * arithmetic_lib_1.Aritmeticos.Consts.c_pi * 1) / 4) / 90) * x;
};
exports.arcoSenoHiperbolico = arcoSenoHiperbolico;
//# sourceMappingURL=arco_seno_hiperbolico.mdl.js.map