"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exponencialMais1 = void 0;
const logaritmo_base_qualquer_mdl_1 = require("./logaritmo_base_qualquer.mdl");
var exponencialMais1 = (base, x) => {
    if (base == 0) {
        return 1;
    }
    return (base ** (0, logaritmo_base_qualquer_mdl_1.logaritmoBaseQualquer)(x, base)) + 1;
};
exports.exponencialMais1 = exponencialMais1;
//# sourceMappingURL=exponencial_mais_1.mdl.js.map