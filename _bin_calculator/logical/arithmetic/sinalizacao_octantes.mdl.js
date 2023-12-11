"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sinalizacaoOctantes = void 0;
var sinalizacaoOctantes = (x, y, z) => {
    let resultado;
    if (x > 0 && y > 0 && z > 0) {
        resultado = "1º.";
    }
    if (x < 0 && y > 0 && z > 0) {
        resultado = "2º.";
    }
    if (x < 0 && y < 0 && z > 0) {
        resultado = "3º.";
    }
    if (x > 0 && y < 0 && z > 0) {
        resultado = "4º.";
    }
    if (x > 0 && y > 0 && z < 0) {
        resultado = "5º.";
    }
    if (x < 0 && y > 0 && z < 0) {
        resultado = "6º.";
    }
    if (x < 0 && y < 0 && z < 0) {
        resultado = "7º.";
    }
    if (x > 0 && y < 0 && z < 0) {
        resultado = "8º.";
    }
    return resultado;
};
exports.sinalizacaoOctantes = sinalizacaoOctantes;
//# sourceMappingURL=sinalizacao_octantes.mdl.js.map