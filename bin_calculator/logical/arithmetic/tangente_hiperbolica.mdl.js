"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tangenteHiperbolica = void 0;
const cosseno_mdl_1 = require("./cosseno.mdl");
const seno_mdl_1 = require("./seno.mdl");
var tangenteHiperbolica = (x) => {
    return 1 / ((0, seno_mdl_1.seno)(x) / (0, cosseno_mdl_1.cosseno)(x));
};
exports.tangenteHiperbolica = tangenteHiperbolica;
//# sourceMappingURL=tangente_hiperbolica.mdl.js.map