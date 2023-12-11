"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dilatacaoVolumetrica = void 0;
var dilatacaoVolumetrica = (volumeInicial, coeficienteDeDilatacaoVolumetrica, temperatura) => {
    return volumeInicial * coeficienteDeDilatacaoVolumetrica * (temperatura.final - temperatura.inicial);
};
exports.dilatacaoVolumetrica = dilatacaoVolumetrica;
//# sourceMappingURL=dilatacao_volumetrica.mdl.js.map