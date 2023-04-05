"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$potenciaDePotencia = exports.$raizTricubica = exports.$raizTriquadrada = exports.$raizBicubica = exports.$raizBiquadrada = exports.$raizCubica = exports.$raizQuadrada = exports.$potencia = exports.$divisao = exports.$multiplicacao = exports.$subtracao = exports.$soma = void 0;
function $soma(n1, n2) {
    return n1 + n2;
}
exports.$soma = $soma;
function $subtracao(n1, n2) {
    return n1 - n2;
}
exports.$subtracao = $subtracao;
function $multiplicacao(n1, n2) {
    return n1 * n2;
}
exports.$multiplicacao = $multiplicacao;
function $divisao(n1, n2) {
    return n1 / n2;
}
exports.$divisao = $divisao;
function $potencia(n1, n2) {
    return Math.pow(n1, n2);
}
exports.$potencia = $potencia;
function $raizQuadrada(n1) {
    return Math.sqrt(n1);
}
exports.$raizQuadrada = $raizQuadrada;
function $raizCubica(n1) {
    return Math.cbrt(n1);
}
exports.$raizCubica = $raizCubica;
function $raizBiquadrada(n1) {
    return Math.sqrt(Math.sqrt(n1));
}
exports.$raizBiquadrada = $raizBiquadrada;
function $raizBicubica(n1) {
    return Math.cbrt(Math.cbrt(n1));
}
exports.$raizBicubica = $raizBicubica;
function $raizTriquadrada(n1) {
    return Math.sqrt(Math.sqrt(Math.sqrt(n1)));
}
exports.$raizTriquadrada = $raizTriquadrada;
function $raizTricubica(n1) {
    return Math.cbrt(Math.cbrt(Math.cbrt(n1)));
}
exports.$raizTricubica = $raizTricubica;
function $potenciaDePotencia(n1, n2, nPotencias, potencias) {
    let potenciaSuperior = 0;
    for (let i = 0; i < nPotencias; i++) {
        potenciaSuperior += potencias[i];
    }
    return Math.pow(Math.pow(n1, n2), potenciaSuperior);
}
exports.$potenciaDePotencia = $potenciaDePotencia;
//# sourceMappingURL=funcoes-basicas.js.map