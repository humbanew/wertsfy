"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cotangenteHiperbolica = void 0;
const cosseno_mdl_1 = require("./cosseno.mdl");
const seno_mdl_1 = require("./seno.mdl");
var cotangenteHiperbolica = (x) => {
    return 1 / (1 / ((0, cosseno_mdl_1.cosseno)(x) / (0, seno_mdl_1.seno)(x)));
};
exports.cotangenteHiperbolica = cotangenteHiperbolica;
//# sourceMappingURL=cotangente_hiperbolica.mdl.js.map