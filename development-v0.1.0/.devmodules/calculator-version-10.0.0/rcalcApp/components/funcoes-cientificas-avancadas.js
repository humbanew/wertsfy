"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$antilogaritmoBaseQualquerHiperbolicoMenosUm = exports.$antilogaritmoBaseQualquerHiperbolico = exports.$antilogaritmoBase2Hiperbolico = exports.$antilogaritmoBase10Hiperbolico = exports.$antilogaritmoNaturalHiperbolicoMaisUm = exports.$antilogaritmoNaturalHiperbolico = exports.$antilogaritmoBaseQualquerInversoMenosUm = exports.$antilogaritmoBaseQualquerInverso = exports.$antilogaritmoBase2Inverso = exports.$antilogaritmoBase10Inverso = exports.$antilogaritmoNaturalInversoMaisUm = exports.$antilogaritmoNaturalInverso = exports.$antilogaritmoBaseQualquerMenosUm = exports.$antilogaritmoBaseQualquer = exports.$antilogaritmoBase2 = exports.$antilogaritmoBase10 = exports.$antilogaritmoNaturalMaisUm = exports.$antilogaritmoNatural = exports.$logaritmoBaseQualquerInversoHiperbolicoMenosUm = exports.$logaritmoBaseQualquerInversoHiperbolico = exports.$logaritmoBase2InversoHiperbolico = exports.$logaritmoBase10InversoHiperbolico = exports.$logaritmoNaturalInversoHiperbolicoMaisUm = exports.$logaritmoNaturalInversoHiperbolico = exports.$logaritmoBaseQualquerHiperbolicoMenosUm = exports.$logaritmoBaseQualquerHiperbolico = exports.$logaritmoBase2Hiperbolico = exports.$logaritmoBase10Hiperbolico = exports.$logaritmoNaturalHiperbolicoMaisUm = exports.$logaritmoNaturalHiperbolico = exports.$logaritmoBaseQualquerInversoMenosUm = exports.$logaritmoBaseQualquerInverso = exports.$logaritmoBase2Inverso = exports.$logaritmoBase10Inverso = exports.$logaritmoNaturalInversoMaisUm = exports.$logaritmoNaturalInverso = exports.$logaritmoBaseQualquerMenosUm = exports.$logaritmoBaseQualquer = exports.$logaritmoBase2 = exports.$logaritmoBase10 = exports.$logaritmoNaturalMaisUm = exports.$logaritmoNatural = exports.$exponencialHiperbolicaInversaMenosUm = exports.$exponencialHiperbolicaInversa = exports.$exponencialHiperbolicaMenosUm = exports.$exponencialHiperbolica = exports.$exponencialInversaMenosUm = exports.$exponencialInversa = exports.$exponencialMenosUm = exports.$exponencial = void 0;
exports.$cologaritmoBaseQualquerInversoHiperbolicoMaisUm = exports.$cologaritmoBaseQualquerInversoHiperbolico = exports.$cologaritmoBase2InversoHiperbolico = exports.$cologaritmoBase10InversoHiperbolico = exports.$cologaritmoNaturalInversoHiperbolicoMaisUm = exports.$cologaritmoNaturalInversoHiperbolico = exports.$cologaritmoBaseQualquerHiperbolicoMaisUm = exports.$cologaritmoBaseQualquerHiperbolico = exports.$cologaritmoBase2Hiperbolico = exports.$cologaritmoBase10Hiperbolico = exports.$cologaritmoNaturalHiperbolicoMaisUm = exports.$cologaritmoNaturalHiperbolico = exports.$cologaritmoBaseQualquerInversoMaisUm = exports.$cologaritmoBaseQualquerInverso = exports.$cologaritmoBase2Inverso = exports.$cologaritmoBase10Inverso = exports.$cologaritmoNaturalInversoMaisUm = exports.$cologaritmoNaturalInverso = exports.$cologaritmoBaseQualquerMaisUm = exports.$cologaritmoBaseQualquer = exports.$cologaritmoBase2 = exports.$cologaritmoBase10 = exports.$cologaritmoNaturalMaisUm = exports.$cologaritmoNatural = exports.$antilogaritmoBaseQualquerInversoHiperbolicoMenosUm = exports.$antilogaritmoBaseQualquerInversoHiperbolico = exports.$antilogaritmoBase2InversoHiperbolico = exports.$antilogaritmoBase10InversoHiperbolico = exports.$antilogaritmoNaturalInversoHiperbolicoMaisUm = exports.$antilogaritmoNaturalInversoHiperbolico = void 0;
function $exponencial(n1) {
    return Math.exp(n1);
}
exports.$exponencial = $exponencial;
function $exponencialMenosUm(n1) {
    return Math.expm1(n1);
}
exports.$exponencialMenosUm = $exponencialMenosUm;
function $exponencialInversa(n1) {
    return -1 * Math.exp(n1);
}
exports.$exponencialInversa = $exponencialInversa;
function $exponencialInversaMenosUm(n1) {
    return -1 * Math.expm1(n1);
}
exports.$exponencialInversaMenosUm = $exponencialInversaMenosUm;
function $exponencialHiperbolica(n1) {
    return 1 / Math.exp(n1);
}
exports.$exponencialHiperbolica = $exponencialHiperbolica;
function $exponencialHiperbolicaMenosUm(n1) {
    return 1 / Math.expm1(n1);
}
exports.$exponencialHiperbolicaMenosUm = $exponencialHiperbolicaMenosUm;
function $exponencialHiperbolicaInversa(n1) {
    return -1 * (1 / Math.exp(n1));
}
exports.$exponencialHiperbolicaInversa = $exponencialHiperbolicaInversa;
function $exponencialHiperbolicaInversaMenosUm(n1) {
    return -1 * (1 / Math.expm1(n1));
}
exports.$exponencialHiperbolicaInversaMenosUm = $exponencialHiperbolicaInversaMenosUm;
function $logaritmoNatural(x1) {
    return Math.log(x1);
}
exports.$logaritmoNatural = $logaritmoNatural;
function $logaritmoNaturalMaisUm(x1) {
    return Math.log1p(x1);
}
exports.$logaritmoNaturalMaisUm = $logaritmoNaturalMaisUm;
function $logaritmoBase10(x1) {
    return Math.log10(x1);
}
exports.$logaritmoBase10 = $logaritmoBase10;
function $logaritmoBase2(x1) {
    return Math.log2(x1);
}
exports.$logaritmoBase2 = $logaritmoBase2;
function $logaritmoBaseQualquer(x1, x2) {
    return Math.log(x1) / Math.log(x2);
}
exports.$logaritmoBaseQualquer = $logaritmoBaseQualquer;
function $logaritmoBaseQualquerMenosUm(x1, x2) {
    return -1 * (Math.log1p(x1) / Math.log1p(x2));
}
exports.$logaritmoBaseQualquerMenosUm = $logaritmoBaseQualquerMenosUm;
function $logaritmoNaturalInverso(x1) {
    return -1 * Math.log(x1);
}
exports.$logaritmoNaturalInverso = $logaritmoNaturalInverso;
function $logaritmoNaturalInversoMaisUm(x1) {
    return -1 * Math.log1p(x1);
}
exports.$logaritmoNaturalInversoMaisUm = $logaritmoNaturalInversoMaisUm;
function $logaritmoBase10Inverso(x1) {
    return -1 * Math.log10(x1);
}
exports.$logaritmoBase10Inverso = $logaritmoBase10Inverso;
function $logaritmoBase2Inverso(x1) {
    return -1 * Math.log2(x1);
}
exports.$logaritmoBase2Inverso = $logaritmoBase2Inverso;
function $logaritmoBaseQualquerInverso(x1, x2) {
    return -1 * Math.log(x1) / Math.log(x2);
}
exports.$logaritmoBaseQualquerInverso = $logaritmoBaseQualquerInverso;
function $logaritmoBaseQualquerInversoMenosUm(x1, x2) {
    return -1 * (Math.log1p(x1) / Math.log1p(x2));
}
exports.$logaritmoBaseQualquerInversoMenosUm = $logaritmoBaseQualquerInversoMenosUm;
function $logaritmoNaturalHiperbolico(x1) {
    return 1 / Math.log(x1);
}
exports.$logaritmoNaturalHiperbolico = $logaritmoNaturalHiperbolico;
function $logaritmoNaturalHiperbolicoMaisUm(x1) {
    return 1 / Math.log1p(x1);
}
exports.$logaritmoNaturalHiperbolicoMaisUm = $logaritmoNaturalHiperbolicoMaisUm;
function $logaritmoBase10Hiperbolico(x1) {
    return 1 / Math.log10(x1);
}
exports.$logaritmoBase10Hiperbolico = $logaritmoBase10Hiperbolico;
function $logaritmoBase2Hiperbolico(x1) {
    return 1 / Math.log2(x1);
}
exports.$logaritmoBase2Hiperbolico = $logaritmoBase2Hiperbolico;
function $logaritmoBaseQualquerHiperbolico(x1, x2) {
    return 1 / (Math.log(x1) / Math.log(x2));
}
exports.$logaritmoBaseQualquerHiperbolico = $logaritmoBaseQualquerHiperbolico;
function $logaritmoBaseQualquerHiperbolicoMenosUm(x1, x2) {
    return -1 * (1 / (Math.log1p(x1) / Math.log1p(x2)));
}
exports.$logaritmoBaseQualquerHiperbolicoMenosUm = $logaritmoBaseQualquerHiperbolicoMenosUm;
function $logaritmoNaturalInversoHiperbolico(x1) {
    return -1 * (1 / Math.log(x1));
}
exports.$logaritmoNaturalInversoHiperbolico = $logaritmoNaturalInversoHiperbolico;
function $logaritmoNaturalInversoHiperbolicoMaisUm(x1) {
    return -1 * (1 / Math.log1p(x1));
}
exports.$logaritmoNaturalInversoHiperbolicoMaisUm = $logaritmoNaturalInversoHiperbolicoMaisUm;
function $logaritmoBase10InversoHiperbolico(x1) {
    return -1 * (1 / Math.log10(x1));
}
exports.$logaritmoBase10InversoHiperbolico = $logaritmoBase10InversoHiperbolico;
function $logaritmoBase2InversoHiperbolico(x1) {
    return -1 * (1 / Math.log2(x1));
}
exports.$logaritmoBase2InversoHiperbolico = $logaritmoBase2InversoHiperbolico;
function $logaritmoBaseQualquerInversoHiperbolico(x1, x2) {
    return -1 * (1 / (Math.log(x1) / Math.log(x2)));
}
exports.$logaritmoBaseQualquerInversoHiperbolico = $logaritmoBaseQualquerInversoHiperbolico;
function $logaritmoBaseQualquerInversoHiperbolicoMenosUm(x1, x2) {
    return -1 * (1 / (Math.log1p(x1) / Math.log1p(x2)));
}
exports.$logaritmoBaseQualquerInversoHiperbolicoMenosUm = $logaritmoBaseQualquerInversoHiperbolicoMenosUm;
function $antilogaritmoNatural(x1) {
    let base = 2.7182818284590452353602874;
    x1 = base ** Math.log(x1);
    return x1;
}
exports.$antilogaritmoNatural = $antilogaritmoNatural;
function $antilogaritmoNaturalMaisUm(x1) {
    let base = 2.7182818284590452353602874;
    x1 = base ** Math.log1p(x1);
    return x1;
}
exports.$antilogaritmoNaturalMaisUm = $antilogaritmoNaturalMaisUm;
function $antilogaritmoBase10(x1) {
    let base = 2.7182818284590452353602874;
    x1 = base ** Math.log10(x1);
    return x1;
}
exports.$antilogaritmoBase10 = $antilogaritmoBase10;
function $antilogaritmoBase2(x1) {
    let base = 2.7182818284590452353602874;
    x1 = base ** Math.log2(x1);
    return x1;
}
exports.$antilogaritmoBase2 = $antilogaritmoBase2;
function $antilogaritmoBaseQualquer(x1, x2) {
    let base = 2.7182818284590452353602874;
    x1 = base ** (Math.log(x1) / Math.log(x2));
    return x1;
}
exports.$antilogaritmoBaseQualquer = $antilogaritmoBaseQualquer;
function $antilogaritmoBaseQualquerMenosUm(x1, x2) {
    let base = 2.7182818284590452353602874;
    x1 = base ** (Math.log1p(x1) / Math.log1p(x2));
    return x1;
}
exports.$antilogaritmoBaseQualquerMenosUm = $antilogaritmoBaseQualquerMenosUm;
function $antilogaritmoNaturalInverso(x1) {
    let base = 2.7182818284590452353602874;
    x1 = base ** -1 * Math.log(x1);
    return x1;
}
exports.$antilogaritmoNaturalInverso = $antilogaritmoNaturalInverso;
function $antilogaritmoNaturalInversoMaisUm(x1) {
    let base = 2.7182818284590452353602874;
    x1 = base ** -1 * Math.log1p(x1);
    return x1;
}
exports.$antilogaritmoNaturalInversoMaisUm = $antilogaritmoNaturalInversoMaisUm;
function $antilogaritmoBase10Inverso(x1) {
    let base = 2.7182818284590452353602874;
    x1 = base ** -1 * Math.log10(x1);
    return x1;
}
exports.$antilogaritmoBase10Inverso = $antilogaritmoBase10Inverso;
function $antilogaritmoBase2Inverso(x1) {
    let base = 2.7182818284590452353602874;
    x1 = base ** -1 * Math.log2(x1);
    return x1;
}
exports.$antilogaritmoBase2Inverso = $antilogaritmoBase2Inverso;
function $antilogaritmoBaseQualquerInverso(x1, x2) {
    let base = 2.7182818284590452353602874;
    x1 = base ** -1 * (Math.log(x1) / Math.log(x2));
    return x1;
}
exports.$antilogaritmoBaseQualquerInverso = $antilogaritmoBaseQualquerInverso;
function $antilogaritmoBaseQualquerInversoMenosUm(x1, x2) {
    let base = 2.7182818284590452353602874;
    x1 = base ** -1 * (Math.log1p(x1) / Math.log1p(x2));
    return x1;
}
exports.$antilogaritmoBaseQualquerInversoMenosUm = $antilogaritmoBaseQualquerInversoMenosUm;
function $antilogaritmoNaturalHiperbolico(x1) {
    let base = 2.7182818284590452353602874;
    x1 = base ** 1 / Math.log(x1);
    return x1;
}
exports.$antilogaritmoNaturalHiperbolico = $antilogaritmoNaturalHiperbolico;
function $antilogaritmoNaturalHiperbolicoMaisUm(x1) {
    let base = 2.7182818284590452353602874;
    x1 = base ** 1 / Math.log1p(x1);
    return x1;
}
exports.$antilogaritmoNaturalHiperbolicoMaisUm = $antilogaritmoNaturalHiperbolicoMaisUm;
function $antilogaritmoBase10Hiperbolico(x1) {
    let base = 2.7182818284590452353602874;
    x1 = base ** 1 / Math.log10(x1);
    return x1;
}
exports.$antilogaritmoBase10Hiperbolico = $antilogaritmoBase10Hiperbolico;
function $antilogaritmoBase2Hiperbolico(x1) {
    let base = 2.7182818284590452353602874;
    x1 = base ** 1 / Math.log2(x1);
    return x1;
}
exports.$antilogaritmoBase2Hiperbolico = $antilogaritmoBase2Hiperbolico;
function $antilogaritmoBaseQualquerHiperbolico(x1, x2) {
    let base = 2.7182818284590452353602874;
    x1 = base ** 1 / (Math.log(x1) / Math.log(x2));
    return x1;
}
exports.$antilogaritmoBaseQualquerHiperbolico = $antilogaritmoBaseQualquerHiperbolico;
function $antilogaritmoBaseQualquerHiperbolicoMenosUm(x1, x2) {
    let base = 2.7182818284590452353602874;
    x1 = base ** 1 / (Math.log1p(x1) / Math.log1p(x2));
    return x1;
}
exports.$antilogaritmoBaseQualquerHiperbolicoMenosUm = $antilogaritmoBaseQualquerHiperbolicoMenosUm;
function $antilogaritmoNaturalInversoHiperbolico(x1) {
    let base = 2.7182818284590452353602874;
    x1 = base ** -1 * (1 / (Math.log(x1)));
    return x1;
}
exports.$antilogaritmoNaturalInversoHiperbolico = $antilogaritmoNaturalInversoHiperbolico;
function $antilogaritmoNaturalInversoHiperbolicoMaisUm(x1) {
    let base = 2.7182818284590452353602874;
    x1 = base ** -1 * (1 / (Math.log1p(x1)));
    return x1;
}
exports.$antilogaritmoNaturalInversoHiperbolicoMaisUm = $antilogaritmoNaturalInversoHiperbolicoMaisUm;
function $antilogaritmoBase10InversoHiperbolico(x1) {
    let base = 2.7182818284590452353602874;
    x1 = base ** -1 * (1 / (Math.log10(x1)));
    return x1;
}
exports.$antilogaritmoBase10InversoHiperbolico = $antilogaritmoBase10InversoHiperbolico;
function $antilogaritmoBase2InversoHiperbolico(x1) {
    let base = 2.7182818284590452353602874;
    x1 = base ** -1 * (1 / (Math.log2(x1)));
    return x1;
}
exports.$antilogaritmoBase2InversoHiperbolico = $antilogaritmoBase2InversoHiperbolico;
function $antilogaritmoBaseQualquerInversoHiperbolico(x1, x2) {
    let base = 2.7182818284590452353602874;
    x1 = base ** -1 * (1 / (Math.log(x1) / Math.log(x2)));
    return x1;
}
exports.$antilogaritmoBaseQualquerInversoHiperbolico = $antilogaritmoBaseQualquerInversoHiperbolico;
function $antilogaritmoBaseQualquerInversoHiperbolicoMenosUm(x1, x2) {
    let base = 2.7182818284590452353602874;
    x1 = base ** -1 * (1 / (Math.log1p(x1) / Math.log1p(x2)));
    return x1;
}
exports.$antilogaritmoBaseQualquerInversoHiperbolicoMenosUm = $antilogaritmoBaseQualquerInversoHiperbolicoMenosUm;
function $cologaritmoNatural(x1) {
    return -1 * Math.log(x1);
}
exports.$cologaritmoNatural = $cologaritmoNatural;
function $cologaritmoNaturalMaisUm(x1) {
    return -1 * Math.log1p(x1);
}
exports.$cologaritmoNaturalMaisUm = $cologaritmoNaturalMaisUm;
function $cologaritmoBase10(x1) {
    return -1 * Math.log10(x1);
}
exports.$cologaritmoBase10 = $cologaritmoBase10;
function $cologaritmoBase2(x1) {
    return -1 * Math.log2(x1);
}
exports.$cologaritmoBase2 = $cologaritmoBase2;
function $cologaritmoBaseQualquer(x1, x2) {
    return -1 * (Math.log(x1) / Math.log(x2));
}
exports.$cologaritmoBaseQualquer = $cologaritmoBaseQualquer;
function $cologaritmoBaseQualquerMaisUm(x1, x2) {
    return -1 * (Math.log1p(x1) / Math.log1p(x2));
}
exports.$cologaritmoBaseQualquerMaisUm = $cologaritmoBaseQualquerMaisUm;
function $cologaritmoNaturalInverso(x1) {
    return -1 * (-1 * Math.log(x1));
}
exports.$cologaritmoNaturalInverso = $cologaritmoNaturalInverso;
function $cologaritmoNaturalInversoMaisUm(x1) {
    return -1 * (-1 * Math.log1p(x1));
}
exports.$cologaritmoNaturalInversoMaisUm = $cologaritmoNaturalInversoMaisUm;
function $cologaritmoBase10Inverso(x1) {
    return -1 * (-1 * Math.log10(x1));
}
exports.$cologaritmoBase10Inverso = $cologaritmoBase10Inverso;
function $cologaritmoBase2Inverso(x1) {
    return -1 * (-1 * Math.log2(x1));
}
exports.$cologaritmoBase2Inverso = $cologaritmoBase2Inverso;
function $cologaritmoBaseQualquerInverso(x1, x2) {
    return -1 * (-1 * (Math.log(x1) / Math.log(x2)));
}
exports.$cologaritmoBaseQualquerInverso = $cologaritmoBaseQualquerInverso;
function $cologaritmoBaseQualquerInversoMaisUm(x1, x2) {
    return -1 * (-1 * (Math.log1p(x1) / Math.log1p(x2)));
}
exports.$cologaritmoBaseQualquerInversoMaisUm = $cologaritmoBaseQualquerInversoMaisUm;
function $cologaritmoNaturalHiperbolico(x1) {
    return 1 / (-1 * Math.log(x1));
}
exports.$cologaritmoNaturalHiperbolico = $cologaritmoNaturalHiperbolico;
function $cologaritmoNaturalHiperbolicoMaisUm(x1) {
    return 1 / (-1 * Math.log1p(x1));
}
exports.$cologaritmoNaturalHiperbolicoMaisUm = $cologaritmoNaturalHiperbolicoMaisUm;
function $cologaritmoBase10Hiperbolico(x1) {
    return 1 / (-1 * Math.log10(x1));
}
exports.$cologaritmoBase10Hiperbolico = $cologaritmoBase10Hiperbolico;
function $cologaritmoBase2Hiperbolico(x1) {
    return 1 / (-1 * Math.log2(x1));
}
exports.$cologaritmoBase2Hiperbolico = $cologaritmoBase2Hiperbolico;
function $cologaritmoBaseQualquerHiperbolico(x1, x2) {
    return 1 / (-1 * (Math.log(x1) / Math.log(x2)));
}
exports.$cologaritmoBaseQualquerHiperbolico = $cologaritmoBaseQualquerHiperbolico;
function $cologaritmoBaseQualquerHiperbolicoMaisUm(x1, x2) {
    return 1 / (-1 * (Math.log1p(x1) / Math.log1p(x2)));
}
exports.$cologaritmoBaseQualquerHiperbolicoMaisUm = $cologaritmoBaseQualquerHiperbolicoMaisUm;
function $cologaritmoNaturalInversoHiperbolico(x1) {
    return 1 / (-1 * (-1 * Math.log(x1)));
}
exports.$cologaritmoNaturalInversoHiperbolico = $cologaritmoNaturalInversoHiperbolico;
function $cologaritmoNaturalInversoHiperbolicoMaisUm(x1) {
    return 1 / (-1 * (-1 * Math.log1p(x1)));
}
exports.$cologaritmoNaturalInversoHiperbolicoMaisUm = $cologaritmoNaturalInversoHiperbolicoMaisUm;
function $cologaritmoBase10InversoHiperbolico(x1) {
    return 1 / (-1 * (-1 * Math.log10(x1)));
}
exports.$cologaritmoBase10InversoHiperbolico = $cologaritmoBase10InversoHiperbolico;
function $cologaritmoBase2InversoHiperbolico(x1) {
    return 1 / (-1 * (-1 * Math.log2(x1)));
}
exports.$cologaritmoBase2InversoHiperbolico = $cologaritmoBase2InversoHiperbolico;
function $cologaritmoBaseQualquerInversoHiperbolico(x1, x2) {
    return 1 / (-1 * (-1 * (Math.log(x1) / Math.log(x2))));
}
exports.$cologaritmoBaseQualquerInversoHiperbolico = $cologaritmoBaseQualquerInversoHiperbolico;
function $cologaritmoBaseQualquerInversoHiperbolicoMaisUm(x1, x2) {
    return 1 / (-1 * (-1 * (Math.log1p(x1) / Math.log1p(x2))));
}
exports.$cologaritmoBaseQualquerInversoHiperbolicoMaisUm = $cologaritmoBaseQualquerInversoHiperbolicoMaisUm;
//# sourceMappingURL=funcoes-cientificas-avancadas.js.map