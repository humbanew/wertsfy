"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aceleracaoPlanoInclinadoEixoX = void 0;
const seno_mdl_1 = require("./seno.mdl");
var aceleracaoPlanoInclinadoEixoX = (massa, gravidade, angulo) => {
    return massa * gravidade * (0, seno_mdl_1.seno)(angulo);
};
exports.aceleracaoPlanoInclinadoEixoX = aceleracaoPlanoInclinadoEixoX;
//# sourceMappingURL=aceleracao_plano_inclinado_eixo_x.mdl.js.map