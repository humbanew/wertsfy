"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arcoTangente = void 0;
const arco_cosseno_mdl_1 = require("./arco_cosseno.mdl");
const arco_seno_mdl_1 = require("./arco_seno.mdl");
var arcoTangente = (x) => {
    return (0, arco_seno_mdl_1.arcoSeno)(x) / (0, arco_cosseno_mdl_1.arcoCosseno)(x);
};
exports.arcoTangente = arcoTangente;
//# sourceMappingURL=arco_tangente.mdl.js.map