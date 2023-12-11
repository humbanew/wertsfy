"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exponencial = void 0;
const logaritmo_base_qualquer_mdl_1 = require("./logaritmo_base_qualquer.mdl");
var exponencial = (base, x) => {
    if (base == 0) {
        return 1;
    }
    return base ** (0, logaritmo_base_qualquer_mdl_1.logaritmoBaseQualquer)(x, base);
};
exports.exponencial = exponencial;
//# sourceMappingURL=exponencial.mdl.js.map