"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lancamentoHorizontal = void 0;
var lancamentoHorizontal = (gravidade, tempo) => {
    return (gravidade * (tempo.final - tempo.inicial) ** 2) / 2;
};
exports.lancamentoHorizontal = lancamentoHorizontal;
//# sourceMappingURL=lancamento_horizontal.mdl.js.map