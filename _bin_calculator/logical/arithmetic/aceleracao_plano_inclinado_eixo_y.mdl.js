"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aceleracaoPlanoInclinadoEixoY = void 0;
const cosseno_mdl_1 = require("./cosseno.mdl");
var aceleracaoPlanoInclinadoEixoY = (massa, gravidade, angulo) => {
    return massa * gravidade * (0, cosseno_mdl_1.cosseno)(angulo);
};
exports.aceleracaoPlanoInclinadoEixoY = aceleracaoPlanoInclinadoEixoY;
//# sourceMappingURL=aceleracao_plano_inclinado_eixo_y.mdl.js.map