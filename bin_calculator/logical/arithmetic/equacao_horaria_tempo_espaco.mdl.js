"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equacaoHorariaDoTempoEspaco = void 0;
var equacaoHorariaDoTempoEspaco = (tempo, espaco, velocidade, aceleracao) => {
    return tempo.inicial + (velocidade * tempo.final) + (aceleracao * (tempo.final ** 2)) + espaco.inicial + aceleracao * espaco.final;
};
exports.equacaoHorariaDoTempoEspaco = equacaoHorariaDoTempoEspaco;
//# sourceMappingURL=equacao_horaria_tempo_espaco.mdl.js.map