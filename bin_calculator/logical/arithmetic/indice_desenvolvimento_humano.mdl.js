"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indiceDesenvolvimentoHumano = void 0;
var indiceDesenvolvimentoHumano = (saude, educacao, renda, populacao, ppc) => {
    return (saude + educacao + renda) / (populacao + ppc);
};
exports.indiceDesenvolvimentoHumano = indiceDesenvolvimentoHumano;
//# sourceMappingURL=indice_desenvolvimento_humano.mdl.js.map