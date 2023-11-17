"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exponencialMenos1 = void 0;
const logaritmo_base_qualquer_mdl_1 = require("./logaritmo_base_qualquer.mdl");
var exponencialMenos1 = (base, x) => {
    if (base == 0) {
        return 1;
    }
    return (base ** (0, logaritmo_base_qualquer_mdl_1.logaritmoBaseQualquer)(x, base)) - 1;
};
exports.exponencialMenos1 = exponencialMenos1;
//# sourceMappingURL=exponencial_menos_1.mdl.js.map