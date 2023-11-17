"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secanteHiperbolica = void 0;
const cosseno_mdl_1 = require("./cosseno.mdl");
var secanteHiperbolica = (x) => {
    return 1 / (1 / (0, cosseno_mdl_1.cosseno)(x));
};
exports.secanteHiperbolica = secanteHiperbolica;
//# sourceMappingURL=secante_hiperbolica.mdl.js.map