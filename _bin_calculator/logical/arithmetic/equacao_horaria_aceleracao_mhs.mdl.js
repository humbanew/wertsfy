"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equacaoHorariaDeAceleracaoMHS = void 0;
const cosseno_mdl_1 = require("./cosseno.mdl");
var equacaoHorariaDeAceleracaoMHS = (velocidadeAngular, amplitude, tempo, faseInicial) => {
    return -1 * velocidadeAngular ** 2 * amplitude * (0, cosseno_mdl_1.cosseno)(tempo + faseInicial);
};
exports.equacaoHorariaDeAceleracaoMHS = equacaoHorariaDeAceleracaoMHS;
//# sourceMappingURL=equacao_horaria_aceleracao_mhs.mdl.js.map