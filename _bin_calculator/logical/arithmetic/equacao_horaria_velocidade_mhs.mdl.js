"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equacaoHorariaDeVelocidadeMHS = void 0;
const seno_mdl_1 = require("./seno.mdl");
var equacaoHorariaDeVelocidadeMHS = (velocidadeAngular, amplitude, tempo, faseInicial) => {
    let resultado = -1 * velocidadeAngular * amplitude * (0, seno_mdl_1.seno)(tempo + faseInicial);
    return resultado;
};
exports.equacaoHorariaDeVelocidadeMHS = equacaoHorariaDeVelocidadeMHS;
//# sourceMappingURL=equacao_horaria_velocidade_mhs.mdl.js.map