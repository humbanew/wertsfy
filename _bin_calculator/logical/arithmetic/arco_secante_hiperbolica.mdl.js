"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arcoSecanteHiperbolica = void 0;
const arco_cosseno_mdl_1 = require("./arco_cosseno.mdl");
var arcoSecanteHiperbolica = (x) => {
    return 1 / (1 / (0, arco_cosseno_mdl_1.arcoCosseno)(x));
};
exports.arcoSecanteHiperbolica = arcoSecanteHiperbolica;
//# sourceMappingURL=arco_secante_hiperbolica.mdl.js.map