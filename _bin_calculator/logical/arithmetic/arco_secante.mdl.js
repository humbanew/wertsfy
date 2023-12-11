"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arcoSecante = void 0;
const arco_cosseno_mdl_1 = require("./arco_cosseno.mdl");
var arcoSecante = (x) => {
    return 1 / (0, arco_cosseno_mdl_1.arcoCosseno)(x);
};
exports.arcoSecante = arcoSecante;
//# sourceMappingURL=arco_secante.mdl.js.map