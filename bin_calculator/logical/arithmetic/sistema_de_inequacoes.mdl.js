"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sistemaDeInequacoes = void 0;
var sistemaDeInequacoes = (expressao1, expressao2) => {
    let resultado = "", verificacao = /((\-)?([0-9]+)(\.[0-9]+)?[x])(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])((\<\=)?(\>\=)?(\<)?(\>)?(\-)?([0-9]+)(\.[0-9]+)?)/gi;
    if (expressao1.match(verificacao) == null || expressao2.match(verificacao) == null) {
        return console.error("A expressão inserida não é válida");
    }
    let pegaParteA = /((\-)?([0-9]+)(\.[0-9]+)?[x])/gi, pegaParteB = /(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])/gi, pegaParteC = /((\-)?([0-9]+)(\.[0-9]+)?)/gi;
    let parteAA = expressao1.match(pegaParteA)?.toString();
    let parteAB = expressao2.match(pegaParteA)?.toString();
    let parteBA = expressao1.match(pegaParteB)?.toString();
    let parteBB = expressao2.match(pegaParteB)?.toString();
    let parteCA = expressao1.match(pegaParteC)?.toString();
    let parteCB = expressao2.match(pegaParteC)?.toString();
    resultado = `${parseFloat(parteAA + parteAB)}x${parseFloat(parteBA + parteBB)}y=${parseFloat(parteCA + parteCB)}`;
    if (parseFloat(parteBA + parteBB) > 0) {
        resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y=${parseFloat(parteCA + parteCB)}`;
    }
    if (parseFloat(parteAA + parteAB) < parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) < parseFloat(parteCA + parteCB)) {
        resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y<${parseFloat(parteCA + parteCB)}`;
    }
    if (parseFloat(parteAA + parteAB) > parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) > parseFloat(parteCA + parteCB)) {
        resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y>${parseFloat(parteCA + parteCB)}`;
    }
    if (parseFloat(parteAA + parteAB) > parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) > parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) - parseFloat(parteAA + parteAB) > parseFloat(parteCA + parteCB)) {
        resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y>${parseFloat(parteCA + parteCB)}`;
    }
    if (parseFloat(parteAA + parteAB) > parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) > parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) - parseFloat(parteAA + parteAB) < parseFloat(parteCA + parteCB)) {
        resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y<${parseFloat(parteCA + parteCB)}`;
    }
    return resultado;
};
exports.sistemaDeInequacoes = sistemaDeInequacoes;
//# sourceMappingURL=sistema_de_inequacoes.mdl.js.map