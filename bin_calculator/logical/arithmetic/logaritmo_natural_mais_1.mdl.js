"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logaritmoNaturalMais1 = void 0;
const arithmetic_lib_1 = require("../../arithmetic.lib");
const logaritmo_private_mdl_1 = require("./private/logaritmo.private.mdl");
var logaritmoNaturalMais1 = (x) => {
    return (0, logaritmo_private_mdl_1._logaritmoBase)(arithmetic_lib_1.Aritmeticos.Consts.c_euler, x + 1);
};
exports.logaritmoNaturalMais1 = logaritmoNaturalMais1;
//# sourceMappingURL=logaritmo_natural_mais_1.mdl.js.map