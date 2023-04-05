"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$calculoDosNumerosPrimos = exports.$calculoDoDiagramaDeVennDe4Grupos = exports.$calculoDoDiagramaDeVennDe3Grupos = exports.$calculoDoDiagramaDeVennDe2Grupos = exports.$criaJogoDaLotoMania = exports.$criaJogoDaLotoFacil = exports.$criaJogoDaQuadra = exports.$criaJogoDaQuina = exports.$criaJogoDaMegaSena = exports.$numeroDeConjuntos = exports.$calculoDosNumerosImpares = exports.$calculoDosNumerosPares = exports.$calculoDeDensidadePopulacional = exports.$calculoDeIMC = exports.$calculoDeGINI = exports.$calculoDeIDH = exports.$calculoDaEscalaGeografica = void 0;
function $calculoDaEscalaGeografica(tamanhoReal, tamanhoFicticio) {
    let resultado = tamanhoReal / tamanhoFicticio;
    return resultado;
}
exports.$calculoDaEscalaGeografica = $calculoDaEscalaGeografica;
function $calculoDeIDH(saude, educacao, renda, populacao, ppc) {
    let resultado = (saude + educacao + renda) / (populacao + ppc);
    return resultado;
}
exports.$calculoDeIDH = $calculoDeIDH;
function $calculoDeGINI(pnb, populacao) {
    let resultado = pnb / populacao;
    return resultado;
}
exports.$calculoDeGINI = $calculoDeGINI;
function $calculoDeIMC(peso, altura) {
    let resultado = peso / altura ** 2;
    return resultado;
}
exports.$calculoDeIMC = $calculoDeIMC;
function $calculoDeDensidadePopulacional(espaco, populacao) {
    let resultado = espaco / populacao;
    return resultado;
}
exports.$calculoDeDensidadePopulacional = $calculoDeDensidadePopulacional;
function $calculoDosNumerosPares(numero) {
    let resultado = numero / 2;
    if (resultado % 2 === 0) {
        console.info("eh par.");
    }
    else {
        console.info("eh impar.");
    }
    return resultado;
}
exports.$calculoDosNumerosPares = $calculoDosNumerosPares;
function $calculoDosNumerosImpares(numero) {
    let resultado = numero / 3;
    if (resultado % 3 === 0) {
        console.info("eh impar.");
    }
    else {
        console.info("eh par.");
    }
    return resultado;
}
exports.$calculoDosNumerosImpares = $calculoDosNumerosImpares;
function $numeroDeConjuntos(elementos) {
    let resultado = 2 ** elementos;
    return resultado;
}
exports.$numeroDeConjuntos = $numeroDeConjuntos;
function $criaJogoDaMegaSena(aposta) {
    let numeros = [];
    for (let i = 0; i < 6; i++) {
        numeros.push(Math.floor(Math.random() * 60) + 1);
    }
    if (aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3] && aposta[4] === numeros[4] && aposta[5] === numeros[5]) {
        console.info("Você ganhou!");
    }
    else {
        console.info("Você perdeu!");
    }
    return numeros;
}
exports.$criaJogoDaMegaSena = $criaJogoDaMegaSena;
function $criaJogoDaQuina(aposta) {
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        numeros.push(Math.floor(Math.random() * 80) + 1);
    }
    if (aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3] && aposta[4] === numeros[4]) {
        console.info("Você ganhou!");
    }
    else {
        console.info("Você perdeu!");
    }
    return numeros;
}
exports.$criaJogoDaQuina = $criaJogoDaQuina;
function $criaJogoDaQuadra(aposta) {
    let numeros = [];
    for (let i = 0; i < 4; i++) {
        numeros.push(Math.floor(Math.random() * 80) + 1);
    }
    if (aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3]) {
        console.info("Você ganhou!");
    }
    else {
        console.info("Você perdeu!");
    }
    return numeros;
}
exports.$criaJogoDaQuadra = $criaJogoDaQuadra;
function $criaJogoDaLotoFacil(aposta) {
    let numeros = [];
    for (let i = 0; i < 6; i++) {
        numeros.push(Math.floor(Math.random() * 80) + 1);
    }
    if (aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3] && aposta[4] === numeros[4] && aposta[5] === numeros[5]) {
        console.info("Você ganhou!");
    }
    else {
        console.info("Você perdeu!");
    }
    return numeros;
}
exports.$criaJogoDaLotoFacil = $criaJogoDaLotoFacil;
function $criaJogoDaLotoMania(aposta) {
    let numeros = [];
    for (let i = 0; i < 15; i++) {
        numeros.push(Math.floor(Math.random() * 80) + 1);
    }
    if (aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3] && aposta[4] === numeros[4] && aposta[5] === numeros[5] && aposta[6] === numeros[6] && aposta[7] === numeros[7] && aposta[8] === numeros[8] && aposta[9] === numeros[9] && aposta[10] === numeros[10] && aposta[11] === numeros[11] && aposta[12] === numeros[12] && aposta[13] === numeros[13] && aposta[14] === numeros[14]) {
        console.info("Você ganhou!");
    }
    else {
        console.info("Você perdeu!");
    }
    return numeros;
}
exports.$criaJogoDaLotoMania = $criaJogoDaLotoMania;
function $calculoDoDiagramaDeVennDe2Grupos(numeroPesquisados, numerosGrupoUmNucleo, numerosGrupoDoisNucleos) {
    let resultados = {
        intecessao: numerosGrupoDoisNucleos,
        nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoDoisNucleos,
        nucleoDois: numerosGrupoUmNucleo[1] - numerosGrupoDoisNucleos
    };
    return resultados;
}
exports.$calculoDoDiagramaDeVennDe2Grupos = $calculoDoDiagramaDeVennDe2Grupos;
function $calculoDoDiagramaDeVennDe3Grupos(numeroPesquisados, numerosGrupoUmNucleo, numerosGrupoDoisNucleos, numerosGrupoTresNucleos) {
    let resultados = {
        intecessao: numerosGrupoTresNucleos,
        nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoTresNucleos,
        nucleoDois: numerosGrupoDoisNucleos[0] - numerosGrupoTresNucleos,
        nucleoTres: numerosGrupoUmNucleo[1] - numerosGrupoTresNucleos
    };
    return resultados;
}
exports.$calculoDoDiagramaDeVennDe3Grupos = $calculoDoDiagramaDeVennDe3Grupos;
function $calculoDoDiagramaDeVennDe4Grupos(numeroPesquisados, numerosGrupoUmNucleo, numerosGrupoDoisNucleos, numerosGrupoTresNucleos, numerosGrupoQuatroNucleos) {
    let resultados = {
        intecessao: numerosGrupoQuatroNucleos,
        nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoQuatroNucleos,
        nucleoDois: numerosGrupoDoisNucleos[0] - numerosGrupoQuatroNucleos,
        nucleoTres: numerosGrupoTresNucleos[0] - numerosGrupoQuatroNucleos,
        nucleoQuatro: numerosGrupoUmNucleo[1] - numerosGrupoQuatroNucleos
    };
    return resultados;
}
exports.$calculoDoDiagramaDeVennDe4Grupos = $calculoDoDiagramaDeVennDe4Grupos;
function $calculoDosNumerosPrimos(numeroPesquisados) {
    let numerosPrimos = [];
    for (let i = 0; i < numeroPesquisados; i++) {
        if (i % 2 !== 0) {
            numerosPrimos.push(i);
        }
    }
    return numerosPrimos;
}
exports.$calculoDosNumerosPrimos = $calculoDosNumerosPrimos;
//# sourceMappingURL=funcoes-experimentais.js.map