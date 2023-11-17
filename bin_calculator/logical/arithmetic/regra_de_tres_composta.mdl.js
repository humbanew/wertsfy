"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regraDeTresComposta = void 0;
var regraDeTresComposta = (valor1, valor2, valor3, valor4, valor5, valor6, valor7, localDavariavel = ("A" || "B" || "C" || "D" || "E" || "F" || "G")) => {
    if (localDavariavel == "a") {
        localDavariavel = "A";
    }
    if (localDavariavel == "b") {
        localDavariavel = "B";
    }
    if (localDavariavel == "c") {
        localDavariavel = "C";
    }
    if (localDavariavel == "d") {
        localDavariavel = "D";
    }
    if (localDavariavel == "e") {
        localDavariavel = "E";
    }
    if (localDavariavel == "f") {
        localDavariavel = "F";
    }
    if (localDavariavel == "g") {
        localDavariavel = "G";
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
        case "D":
            resultado = valor4 * valor5 / valor6;
            break;
        case "E":
            resultado = valor4 * valor6 / valor5;
            break;
        case "F":
            resultado = valor5 * valor6 / valor4;
            break;
        case "G":
            resultado = valor7 * valor5 / valor6;
            break;
    }
    return resultado;
};
exports.regraDeTresComposta = regraDeTresComposta;
//# sourceMappingURL=regra_de_tres_composta.mdl.js.map