"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quadradoDePunnet = void 0;
var quadradoDePunnet = (genotipo1, genotipo2) => {
    if (genotipo1.length > 2 || genotipo2.length > 2) {
        return;
    }
    const genDiv1 = genotipo1.slice(0, 1);
    const genDiv2 = genotipo2.slice(0, 1);
    const genDiv3 = genotipo1.slice(1, 2);
    const genDiv4 = genotipo2.slice(1, 2);
    let resultado;
    return resultado = [
        genDiv1 + genDiv3,
        genDiv1 + genDiv4,
        genDiv2 + genDiv3,
        genDiv2 + genDiv4
    ];
};
exports.quadradoDePunnet = quadradoDePunnet;
//# sourceMappingURL=quadrado_de_punnet.mdl.js.map