"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contraForcaEletromotriz = void 0;
const forca_eletromotriz_mdl_1 = require("./forca_eletromotriz.mdl");
var contraForcaEletromotriz = (potenciaTotalGerador, intensidadeDaCorrente) => {
    return -1 * (0, forca_eletromotriz_mdl_1.forcaEletromotriz)(potenciaTotalGerador, intensidadeDaCorrente);
};
exports.contraForcaEletromotriz = contraForcaEletromotriz;
//# sourceMappingURL=contra_forca_eletromotriz.mdl.js.map