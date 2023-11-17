"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logaritmoNaturalMenos1 = void 0;
const arithmetic_lib_1 = require("../../arithmetic.lib");
const logaritmo_private_mdl_1 = require("./private/logaritmo.private.mdl");
var logaritmoNaturalMenos1 = (x) => {
    return (0, logaritmo_private_mdl_1._logaritmoBase)(arithmetic_lib_1.Aritmeticos.Consts.c_euler, x - 1);
};
exports.logaritmoNaturalMenos1 = logaritmoNaturalMenos1;
//# sourceMappingURL=logaritmo_natural_menos_1.mdl.js.map