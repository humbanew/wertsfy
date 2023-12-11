"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.potencialMecanico = void 0;
const energia_cinetica_mdl_1 = require("./energia_cinetica.mdl");
const energia_potencial_elastica_mdl_1 = require("./energia_potencial_elastica.mdl");
const energia_potencial_gravitacional_mdl_1 = require("./energia_potencial_gravitacional.mdl");
var potencialMecanico = (velocidade, constanteElastica, distancia, massa, gravidade, altura, energPotElas, energPotGrav) => {
    let resultado = 0;
    if (energPotElas == true) {
        resultado = (0, energia_cinetica_mdl_1.energiaCinetica)(massa, velocidade) + (0, energia_potencial_elastica_mdl_1.energiaPotencialElastica)(constanteElastica, distancia);
    }
    if (energPotGrav == true) {
        resultado = (0, energia_cinetica_mdl_1.energiaCinetica)(massa, velocidade) + (0, energia_potencial_gravitacional_mdl_1.energiaPotencialGravitacional)(massa, gravidade, altura);
    }
    return resultado;
};
exports.potencialMecanico = potencialMecanico;
//# sourceMappingURL=potencial_mecanico.mdl.js.map