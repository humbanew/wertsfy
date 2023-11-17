"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cossenoHiperbolico = void 0;
const arithmetic_lib_1 = require("../../arithmetic.lib");
var cossenoHiperbolico = (x) => {
    return 1 / (-1 * ((2 * arithmetic_lib_1.Aritmeticos.Consts.c_pi * 1) / 4) / 90) * x;
};
exports.cossenoHiperbolico = cossenoHiperbolico;
//# sourceMappingURL=cosseno_hiperbolico.mdl.js.map