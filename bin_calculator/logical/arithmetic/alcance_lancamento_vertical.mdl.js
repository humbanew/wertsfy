"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alcanceLancamentoVertical = void 0;
const cosseno_mdl_1 = require("./cosseno.mdl");
var alcanceLancamentoVertical = (velocidade, tempo, angulo) => {
    return velocidade * (0, cosseno_mdl_1.cosseno)(angulo) * (tempo.final - tempo.inicial);
};
exports.alcanceLancamentoVertical = alcanceLancamentoVertical;
//# sourceMappingURL=alcance_lancamento_vertical.mdl.js.map