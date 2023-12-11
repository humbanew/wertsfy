"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titulacao = void 0;
var titulacao = (massaBase, massaAcido, volumeBase, volumeAcido) => {
    if (massaAcido == 0)
        return massaBase * volumeBase / volumeAcido;
    if (massaBase == 0)
        return massaAcido * volumeAcido / volumeBase;
    if (volumeAcido == 0)
        return massaBase * volumeBase / massaAcido;
    if (volumeBase == 0)
        return massaAcido * volumeAcido / massaBase;
};
exports.titulacao = titulacao;
//# sourceMappingURL=titulacao.mdl.js.map