"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quadradoDePunnetExpandido = void 0;
var quadradoDePunnetExpandido = (genotipo1, genotipo2) => {
    if (genotipo2.length > 4 || genotipo2.length > 4) {
        return;
    }
    const genDiv1 = genotipo1.slice(0, 1);
    const genDiv2 = genotipo2.slice(0, 1);
    const genDiv3 = genotipo1.slice(1, 2);
    const genDiv4 = genotipo2.slice(1, 2);
    const genDiv5 = genotipo1.slice(2, 3);
    const genDiv6 = genotipo2.slice(2, 3);
    const genDiv7 = genotipo1.slice(3, 4);
    const genDiv8 = genotipo2.slice(3, 4);
    let resultado;
    return resultado = [
        genDiv1 + genDiv3,
        genDiv1 + genDiv4,
        genDiv1 + genDiv5,
        genDiv1 + genDiv6,
        genDiv1 + genDiv7,
        genDiv1 + genDiv8,
        genDiv2 + genDiv3,
        genDiv2 + genDiv4,
        genDiv2 + genDiv5,
        genDiv2 + genDiv6,
        genDiv2 + genDiv7,
        genDiv2 + genDiv8
    ];
};
exports.quadradoDePunnetExpandido = quadradoDePunnetExpandido;
//# sourceMappingURL=quadrado_de_punnet_extendido.mdl.js.map