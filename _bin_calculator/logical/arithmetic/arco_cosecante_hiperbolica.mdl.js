"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arcoCosecanteHiperbolica = void 0;
const arco_seno_mdl_1 = require("./arco_seno.mdl");
var arcoCosecanteHiperbolica = (x) => {
    return 1 / (1 / (0, arco_seno_mdl_1.arcoSeno)(x));
};
exports.arcoCosecanteHiperbolica = arcoCosecanteHiperbolica;
//# sourceMappingURL=arco_cosecante_hiperbolica.mdl.js.map