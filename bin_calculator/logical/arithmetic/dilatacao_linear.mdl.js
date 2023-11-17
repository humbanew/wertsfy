"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dilatacaoLinear = void 0;
var dilatacaoLinear = (comprimentoInicial, coeficienteDeDilatacaoLinear, temperatura) => {
    return comprimentoInicial * coeficienteDeDilatacaoLinear * (temperatura.final - temperatura.inicial);
};
exports.dilatacaoLinear = dilatacaoLinear;
//# sourceMappingURL=dilatacao_linear.mdl.js.map