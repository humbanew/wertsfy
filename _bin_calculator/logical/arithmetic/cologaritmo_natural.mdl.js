"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cologaritmoNatural = void 0;
const arithmetic_lib_1 = require("../../arithmetic.lib");
const logaritmo_private_mdl_1 = require("./private/logaritmo.private.mdl");
var cologaritmoNatural = (x) => {
    return -1 * (0, logaritmo_private_mdl_1._logaritmoBase)(arithmetic_lib_1.Aritmeticos.Consts.c_euler, x);
};
exports.cologaritmoNatural = cologaritmoNatural;
//# sourceMappingURL=cologaritmo_natural.mdl.js.map