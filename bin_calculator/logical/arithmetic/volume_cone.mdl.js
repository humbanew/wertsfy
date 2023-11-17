"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.volumeCone = void 0;
const arithmetic_lib_1 = require("../../arithmetic.lib");
var volumeCone = (raio, altura) => {
    return (arithmetic_lib_1.Aritmeticos.Consts.c_pi * (raio ** 2) * altura) / 3;
};
exports.volumeCone = volumeCone;
//# sourceMappingURL=volume_cone.mdl.js.map