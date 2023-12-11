"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equacaoDeTorricelli = void 0;
const raiz_quadrada_mdl_1 = require("./raiz_quadrada.mdl");
var equacaoDeTorricelli = (velocidadeInicial, aceleracao, espaco) => {
    let resultado = (0, raiz_quadrada_mdl_1.raizQuadrada)((velocidadeInicial ** 2) + 2 * aceleracao * (espaco.final - espaco.inicial));
    return resultado;
};
exports.equacaoDeTorricelli = equacaoDeTorricelli;
//# sourceMappingURL=equacao_torricelli.mdl.js.map