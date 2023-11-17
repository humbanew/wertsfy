"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alturaMaximaLancamentoVertical = void 0;
const seno_mdl_1 = require("./seno.mdl");
var alturaMaximaLancamentoVertical = (velocidadeInicial, gravidade, angulo) => {
    return (velocidadeInicial ** 2) * (((0, seno_mdl_1.seno)(angulo) ** 2) / 2) * gravidade;
};
exports.alturaMaximaLancamentoVertical = alturaMaximaLancamentoVertical;
//# sourceMappingURL=altura_maxima_lancamento_vertical.mdl.js.map