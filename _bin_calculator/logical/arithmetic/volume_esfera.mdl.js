"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.volumeEsfera = void 0;
const arithmetic_lib_1 = require("../../arithmetic.lib");
var volumeEsfera = (raio) => {
    return (4 * arithmetic_lib_1.Aritmeticos.Consts.c_pi * (raio ** 3)) / 3;
};
exports.volumeEsfera = volumeEsfera;
//# sourceMappingURL=volume_esfera.mdl.js.map