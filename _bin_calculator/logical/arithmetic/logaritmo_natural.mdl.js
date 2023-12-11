"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logaritmoNatural = void 0;
const arithmetic_lib_1 = require("../../arithmetic.lib");
const logaritmo_private_mdl_1 = require("./private/logaritmo.private.mdl");
var logaritmoNatural = (x) => {
    return (0, logaritmo_private_mdl_1._logaritmoBase)(arithmetic_lib_1.Aritmeticos.Consts.c_euler, x);
};
exports.logaritmoNatural = logaritmoNatural;
//# sourceMappingURL=logaritmo_natural.mdl.js.map