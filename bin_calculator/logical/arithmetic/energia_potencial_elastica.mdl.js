"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.energiaPotencialElastica = void 0;
var energiaPotencialElastica = (constanteElastica, distancia) => {
    return (constanteElastica * (distancia.final - distancia.inicial) ** 2) / 2;
};
exports.energiaPotencialElastica = energiaPotencialElastica;
//# sourceMappingURL=energia_potencial_elastica.mdl.js.map