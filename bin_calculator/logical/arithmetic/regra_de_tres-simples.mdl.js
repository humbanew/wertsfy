"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regraDeTresSimples = void 0;
var regraDeTresSimples = (valor1, valor2, valor3, localDavariavel = ("A" || "B" || "C")) => {
    if (localDavariavel == "a") {
        localDavariavel = "A";
    }
    if (localDavariavel == "b") {
        localDavariavel = "B";
    }
    if (localDavariavel == "c") {
        localDavariavel = "C";
    }
    let resultado = 0;
    switch (localDavariavel) {
        case "A":
            resultado = valor1 * valor2 / valor3;
            break;
        case "B":
            resultado = valor1 * valor3 / valor2;
            break;
        case "C":
            resultado = valor2 * valor3 / valor1;
            break;
    }
    return resultado;
};
exports.regraDeTresSimples = regraDeTresSimples;
//# sourceMappingURL=regra_de_tres-simples.mdl.js.map