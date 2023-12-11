"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leiDeCoulomb = void 0;
var leiDeCoulomb = (carga, distancia) => {
    return (9 * 10 ** 9) * (carga.a * carga.b / (distancia.final - distancia.inicial) ** 2);
};
exports.leiDeCoulomb = leiDeCoulomb;
//# sourceMappingURL=lei_de_coulomb.mdl.js.map