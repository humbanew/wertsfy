"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arcoTangenteHiperbolica = void 0;
const arco_cosseno_mdl_1 = require("./arco_cosseno.mdl");
const arco_seno_mdl_1 = require("./arco_seno.mdl");
var arcoTangenteHiperbolica = (x) => {
    return 1 / ((0, arco_seno_mdl_1.arcoSeno)(x) / (0, arco_cosseno_mdl_1.arcoCosseno)(x));
};
exports.arcoTangenteHiperbolica = arcoTangenteHiperbolica;
//# sourceMappingURL=arco_tangente_hiperbolica.mdl.js.map