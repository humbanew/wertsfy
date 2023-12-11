"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equacaoHorariaDoTempo = void 0;
var equacaoHorariaDoTempo = (tempo, velocidade, aceleracao) => {
    return tempo.inicial + (velocidade * tempo.final) + (aceleracao * (tempo.final ** 2));
};
exports.equacaoHorariaDoTempo = equacaoHorariaDoTempo;
//# sourceMappingURL=equacao_horaria_tempo.mdl.js.map