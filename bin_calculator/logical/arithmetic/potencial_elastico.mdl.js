"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.potencialElastico = void 0;
const energia_potencial_elastica_mdl_1 = require("./energia_potencial_elastica.mdl");
var potencialElastico = (constanteElastica, distancia) => {
    return (0, energia_potencial_elastica_mdl_1.energiaPotencialElastica)(constanteElastica, distancia);
};
exports.potencialElastico = potencialElastico;
//# sourceMappingURL=potencial_elastico.mdl.js.map