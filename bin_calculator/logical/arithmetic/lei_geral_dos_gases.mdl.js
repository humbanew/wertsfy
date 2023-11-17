"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leiGeralDosGases = void 0;
var leiGeralDosGases = (pressao1, pressao2, volume1, volume2, temperatura1, temperatura2) => {
    let verificacao = /([a-zA-Z])/gi;
    let resultado = 0;
    if (pressao1.match(verificacao) != null || "") {
        resultado = (parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(volume2) * parseFloat(temperatura1));
    }
    if (pressao2.match(verificacao) != null || "") {
        resultado = (parseFloat(pressao1) * parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(volume2) * parseFloat(temperatura1));
    }
    if (volume1.match(verificacao) != null || "") {
        resultado = (parseFloat(pressao1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(volume2) * parseFloat(temperatura1));
    }
    if (volume2.match(verificacao) != null || "") {
        resultado = (parseFloat(pressao1) * parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(temperatura1));
    }
    if (temperatura1.match(verificacao) != null || "") {
        resultado = (parseFloat(pressao1) * parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(volume2));
    }
    if (temperatura2.match(verificacao) != null || "") {
        resultado = (parseFloat(pressao1) * parseFloat(volume1)) / (parseFloat(pressao2) * parseFloat(volume2) * parseFloat(temperatura1));
    }
    return resultado;
};
exports.leiGeralDosGases = leiGeralDosGases;
//# sourceMappingURL=lei_geral_dos_gases.mdl.js.map