"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arcoCotangenteHiperbolica = void 0;
const arco_tangente_mdl_1 = require("./arco_tangente.mdl");
var arcoCotangenteHiperbolica = (x) => {
    return 1 / (1 / (0, arco_tangente_mdl_1.arcoTangente)(x));
};
exports.arcoCotangenteHiperbolica = arcoCotangenteHiperbolica;
//# sourceMappingURL=arco_cotangente_hiperbolica.mdl.js.map