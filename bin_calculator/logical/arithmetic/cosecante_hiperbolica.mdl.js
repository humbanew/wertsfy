"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cosecanteHiperbolica = void 0;
const seno_mdl_1 = require("./seno.mdl");
var cosecanteHiperbolica = (x) => {
    return 1 / (1 / (0, seno_mdl_1.seno)(x));
};
exports.cosecanteHiperbolica = cosecanteHiperbolica;
//# sourceMappingURL=cosecante_hiperbolica.mdl.js.map