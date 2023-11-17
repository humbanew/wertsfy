"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.determinante3x3 = void 0;
var determinante3x3 = (a00, a01, a02, a10, a11, a12, a20, a21, a22) => {
    let resultado;
    let vetorPrincipal1 = a00 * a11 * a22;
    let vetorPrincipal2 = a01 * a12 * a20;
    let vetorPrincipal3 = a02 * a10 * a21;
    let vetorSecundario1 = a02 * a11 * a20;
    let vetorSecundario2 = a00 * a12 * a21;
    let vetorSecundario3 = a01 * a10 * a22;
    return resultado = (vetorPrincipal1 + vetorPrincipal2 + vetorPrincipal3) - (vetorSecundario1 + vetorSecundario2 + vetorSecundario3);
};
exports.determinante3x3 = determinante3x3;
//# sourceMappingURL=determinante_3x3.mdl.js.map