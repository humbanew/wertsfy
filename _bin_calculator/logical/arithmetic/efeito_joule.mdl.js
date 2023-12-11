"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.efeitoJoule = void 0;
var efeitoJoule = (corrente, resistencia, tempo) => {
    return (corrente ** 2) * resistencia * (tempo.final - tempo.inicial);
};
exports.efeitoJoule = efeitoJoule;
//# sourceMappingURL=efeito_joule.mdl.js.map