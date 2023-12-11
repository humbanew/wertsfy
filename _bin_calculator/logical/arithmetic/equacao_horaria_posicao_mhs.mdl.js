"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equacaoHorariaDePosicaoMHS = void 0;
const cosseno_mdl_1 = require("./cosseno.mdl");
var equacaoHorariaDePosicaoMHS = (velocidadeAngular, amplitude, tempo, faseInicial) => {
    return velocidadeAngular * amplitude * (0, cosseno_mdl_1.cosseno)(tempo + faseInicial);
};
exports.equacaoHorariaDePosicaoMHS = equacaoHorariaDePosicaoMHS;
//# sourceMappingURL=equacao_horaria_posicao_mhs.mdl.js.map