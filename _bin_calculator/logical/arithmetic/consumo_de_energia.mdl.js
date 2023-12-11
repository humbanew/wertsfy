"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consumoDeEnergia = void 0;
var consumoDeEnergia = (tempo, correnteEletrica, ddp) => {
    return correnteEletrica * ddp * (tempo.final - tempo.inicial);
};
exports.consumoDeEnergia = consumoDeEnergia;
//# sourceMappingURL=consumo_de_energia.mdl.js.map