"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dilatacaoSuperficial = void 0;
var dilatacaoSuperficial = (areaInicial, coeficienteDeDilatacaoSuperficial, temperatura) => {
    return areaInicial * coeficienteDeDilatacaoSuperficial * (temperatura.final - temperatura.inicial);
};
exports.dilatacaoSuperficial = dilatacaoSuperficial;
//# sourceMappingURL=dilatacao_superficial.mdl.js.map