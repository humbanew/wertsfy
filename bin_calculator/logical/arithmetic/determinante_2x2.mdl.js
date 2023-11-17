"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.determinante2x2 = void 0;
var determinante2x2 = (a00, a01, a10, a11) => {
    let resultado, vetorPrimario = a00 * a11, vetorSecundario = a01 * a10;
    return resultado = vetorPrimario - vetorSecundario;
};
exports.determinante2x2 = determinante2x2;
//# sourceMappingURL=determinante_2x2.mdl.js.map