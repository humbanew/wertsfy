"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teoremaDeStirling = void 0;
const logaritmo_base_10_mdl_1 = require("./logaritmo_base_10.mdl");
var teoremaDeStirling = (valor) => {
    return ((0, logaritmo_base_10_mdl_1.logaritmoBase10)(valor) * valor) / valor;
};
exports.teoremaDeStirling = teoremaDeStirling;
//# sourceMappingURL=teorema_stirling.mdl.js.map