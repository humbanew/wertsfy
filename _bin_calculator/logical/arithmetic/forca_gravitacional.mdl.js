"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forcaGravitacional = void 0;
var forcaGravitacional = (gravidade, massaPlaneta, distancia) => {
    return gravidade * (massaPlaneta / (distancia.final - distancia.inicial) ** 2);
};
exports.forcaGravitacional = forcaGravitacional;
//# sourceMappingURL=forca_gravitacional.mdl.js.map