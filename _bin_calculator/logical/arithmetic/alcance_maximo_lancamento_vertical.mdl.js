"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alcanceMaximoLancamentoVertical = void 0;
const seno_mdl_1 = require("./seno.mdl");
var alcanceMaximoLancamentoVertical = (velocidade, angulo, gravidade) => {
    return (velocidade ** 2 * ((0, seno_mdl_1.seno)(angulo) ** 2)) / gravidade;
};
exports.alcanceMaximoLancamentoVertical = alcanceMaximoLancamentoVertical;
//# sourceMappingURL=alcance_maximo_lancamento_vertical.mdl.js.map