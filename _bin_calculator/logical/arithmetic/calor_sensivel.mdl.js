"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calorSensivel = void 0;
var calorSensivel = (massa, calorEspecifico, temperatura) => {
    return massa * calorEspecifico * (temperatura.final - temperatura.inicial);
};
exports.calorSensivel = calorSensivel;
//# sourceMappingURL=calor_sensivel.mdl.js.map