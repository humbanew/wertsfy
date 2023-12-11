"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equacaoHorariaDoEspacoMCUV = void 0;
var equacaoHorariaDoEspacoMCUV = (posicaoAngularInicial, velocidadeAngularInicial, aceleracaoAngular, tempo) => {
    return posicaoAngularInicial + (velocidadeAngularInicial * tempo) + (aceleracaoAngular * tempo ** 2) / 2;
};
exports.equacaoHorariaDoEspacoMCUV = equacaoHorariaDoEspacoMCUV;
//# sourceMappingURL=equacao_horaria_espaco_mcuv.mdl.js.map