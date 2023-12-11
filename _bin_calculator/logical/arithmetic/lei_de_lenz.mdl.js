"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leiDeLenz = void 0;
const cosseno_mdl_1 = require("./cosseno.mdl");
var leiDeLenz = (intensidadeDoCampoMagnetico, areaDaSuperficie, angulo) => {
    let resultado = intensidadeDoCampoMagnetico * areaDaSuperficie * (0, cosseno_mdl_1.cosseno)(angulo);
    return resultado;
};
exports.leiDeLenz = leiDeLenz;
//# sourceMappingURL=lei_de_lenz.mdl.js.map