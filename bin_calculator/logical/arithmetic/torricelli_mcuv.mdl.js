"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.torricelliMCUV = void 0;
const raiz_quadrada_mdl_1 = require("./raiz_quadrada.mdl");
var torricelliMCUV = (velocidadeAngularInicial, aceleracaoAngular, deslocamentoAngular) => {
    let resultado = (0, raiz_quadrada_mdl_1.raizQuadrada)(velocidadeAngularInicial + 2 * aceleracaoAngular * (deslocamentoAngular.final - deslocamentoAngular.inicial));
    return resultado;
};
exports.torricelliMCUV = torricelliMCUV;
//# sourceMappingURL=torricelli_mcuv.mdl.js.map