export function $exponencial(n1: number) {
  return Math.exp(n1);
}

export function $exponencialMenosUm(n1: number) {
  return Math.expm1(n1);
}

export function $exponencialInversa(n1: number) {
  return -1 * Math.exp(n1);
}

export function $exponencialInversaMenosUm(n1: number) {
  return -1 * Math.expm1(n1);
}

export function $exponencialHiperbolica(n1: number) {
  return 1 / Math.exp(n1);
}

export function $exponencialHiperbolicaMenosUm(n1: number) {
  return 1 / Math.expm1(n1);
}

export function $exponencialHiperbolicaInversa(n1: number) {
  return -1 * (1 / Math.exp(n1));
}

export function $exponencialHiperbolicaInversaMenosUm(n1: number) {
  return -1 * (1 / Math.expm1(n1));
}

export function $logaritmoNatural(x1: number) { 
  return Math.log(x1); 
}

export function $logaritmoNaturalMaisUm(x1: number) {
  return Math.log1p(x1);
}

export function $logaritmoBase10(x1: number) { 
  return Math.log10(x1); 
}

export function $logaritmoBase2(x1: number) { 
  return Math.log2(x1); 
}

export function $logaritmoBaseQualquer(x1: number, x2: number) { 
  return Math.log(x1) / Math.log(x2); 
}

export function $logaritmoBaseQualquerMenosUm(x1: number, x2: number) {
  return -1 * (Math.log1p(x1) / Math.log1p(x2));
}

export function $logaritmoNaturalInverso(x1: number) { 
  return -1 * Math.log(x1); 
}

export function $logaritmoNaturalInversoMaisUm(x1: number) {
  return -1 * Math.log1p(x1);
}

export function $logaritmoBase10Inverso(x1: number) { 
  return -1 * Math.log10(x1); 
}

export function $logaritmoBase2Inverso(x1: number) { 
  return -1 * Math.log2(x1); 
}

export function $logaritmoBaseQualquerInverso(x1: number, x2: number) { 
  return -1 * Math.log(x1) / Math.log(x2); 
}

export function $logaritmoBaseQualquerInversoMenosUm(x1: number, x2: number) {
  return -1 * (Math.log1p(x1) / Math.log1p(x2));
}

export function $logaritmoNaturalHiperbolico(x1: number) { 
  return 1 / Math.log(x1); 
}

export function $logaritmoNaturalHiperbolicoMaisUm(x1: number) {
  return 1 / Math.log1p(x1);
}

export function $logaritmoBase10Hiperbolico(x1: number) { 
  return 1 / Math.log10(x1); 
}

export function $logaritmoBase2Hiperbolico(x1: number) { 
  return 1 / Math.log2(x1); 
}

export function $logaritmoBaseQualquerHiperbolico(x1: number, x2: number) { 
  return 1 / (Math.log(x1) / Math.log(x2)); 
}

export function $logaritmoBaseQualquerHiperbolicoMenosUm(x1: number, x2: number) {
  return -1 * (1 / (Math.log1p(x1) / Math.log1p(x2)));
}

export function $logaritmoNaturalInversoHiperbolico(x1: number) { 
  return -1 * (1 / Math.log(x1)); 
}

export function $logaritmoNaturalInversoHiperbolicoMaisUm(x1: number) {
  return -1 * (1 / Math.log1p(x1));
}

export function $logaritmoBase10InversoHiperbolico(x1: number) { 
  return -1 * (1 / Math.log10(x1)); 
}

export function $logaritmoBase2InversoHiperbolico(x1: number) { 
  return -1 * (1 / Math.log2(x1)); 
}

export function $logaritmoBaseQualquerInversoHiperbolico(x1: number, x2: number) { 
  return -1 * (1 / (Math.log(x1) / Math.log(x2))); 
}

export function $logaritmoBaseQualquerInversoHiperbolicoMenosUm(x1: number, x2: number) {
  return -1 * (1 / (Math.log1p(x1) / Math.log1p(x2)));
}

export function $antilogaritmoNatural(x1: number) { 
  let base = 2.7182818284590452353602874; 
  x1 = base ** Math.log(x1);
  return x1;
}

export function $antilogaritmoNaturalMaisUm(x1: number) {
  let base = 2.7182818284590452353602874; 
  x1 = base ** Math.log1p(x1);
  return x1;
}

export function $antilogaritmoBase10(x1: number) { 
  let base = 2.7182818284590452353602874; 
  x1 = base ** Math.log10(x1);
  return x1;
}

export function $antilogaritmoBase2(x1: number) { 
  let base = 2.7182818284590452353602874; 
  x1 = base ** Math.log2(x1);
  return x1;
}

export function $antilogaritmoBaseQualquer(x1: number, x2: number) { 
  let base = 2.7182818284590452353602874; 
  x1 = base ** (Math.log(x1) / Math.log(x2));
  return x1;
}

export function $antilogaritmoBaseQualquerMenosUm(x1: number, x2: number) {
  let base = 2.7182818284590452353602874; 
  x1 = base ** (Math.log1p(x1) / Math.log1p(x2));
  return x1;
}

export function $antilogaritmoNaturalInverso(x1: number) { 
  let base = 2.7182818284590452353602874; 
  x1 = base ** -1 * Math.log(x1);
  return x1;
}

export function $antilogaritmoNaturalInversoMaisUm(x1: number) {
  let base = 2.7182818284590452353602874; 
  x1 = base ** -1 * Math.log1p(x1);
  return x1;
}

export function $antilogaritmoBase10Inverso(x1: number) { 
  let base = 2.7182818284590452353602874; 
  x1 = base ** -1 * Math.log10(x1);
  return x1;
}

export function $antilogaritmoBase2Inverso(x1: number) { 
  let base = 2.7182818284590452353602874; 
  x1 = base ** -1 * Math.log2(x1);
  return x1;
}

export function $antilogaritmoBaseQualquerInverso(x1: number, x2: number) { 
  let base = 2.7182818284590452353602874; 
  x1 = base ** -1 * (Math.log(x1) / Math.log(x2));
  return x1;
}

export function $antilogaritmoBaseQualquerInversoMenosUm(x1: number, x2: number) {
  let base = 2.7182818284590452353602874;
  x1 = base ** -1 * (Math.log1p(x1) / Math.log1p(x2));
  return x1;
}

export function $antilogaritmoNaturalHiperbolico(x1: number) { 
  let base = 2.7182818284590452353602874; 
  x1 = base ** 1 / Math.log(x1);
  return x1;
}

export function $antilogaritmoNaturalHiperbolicoMaisUm(x1: number) {
  let base = 2.7182818284590452353602874; 
  x1 = base ** 1 / Math.log1p(x1);
  return x1;
}

export function $antilogaritmoBase10Hiperbolico(x1: number) { 
  let base = 2.7182818284590452353602874; 
  x1 = base ** 1 / Math.log10(x1);
  return x1;
}

export function $antilogaritmoBase2Hiperbolico(x1: number) { 
  let base = 2.7182818284590452353602874; 
  x1 = base ** 1 / Math.log2(x1);
  return x1;
}

export function $antilogaritmoBaseQualquerHiperbolico(x1: number, x2: number) { 
  let base = 2.7182818284590452353602874; 
  x1 = base ** 1 / (Math.log(x1) / Math.log(x2));
  return x1;
}

export function $antilogaritmoBaseQualquerHiperbolicoMenosUm(x1: number, x2: number) {
  let base = 2.7182818284590452353602874;
  x1 = base ** 1 / (Math.log1p(x1) / Math.log1p(x2));
  return x1;
}

export function $antilogaritmoNaturalInversoHiperbolico(x1: number) { 
  let base = 2.7182818284590452353602874; 
  x1 = base ** -1 * ( 1 / (Math.log(x1)));
  return x1;
}

export function $antilogaritmoNaturalInversoHiperbolicoMaisUm(x1: number) {
  let base = 2.7182818284590452353602874; 
  x1 = base ** -1 * ( 1 / (Math.log1p(x1)));
  return x1;
}

export function $antilogaritmoBase10InversoHiperbolico(x1: number) { 
  let base = 2.7182818284590452353602874; 
  x1 = base ** -1 * ( 1 / (Math.log10(x1)));
  return x1;
}

export function $antilogaritmoBase2InversoHiperbolico(x1: number) { 
  let base = 2.7182818284590452353602874; 
  x1 = base ** -1 * ( 1 / (Math.log2(x1)));
  return x1;
}

export function $antilogaritmoBaseQualquerInversoHiperbolico(x1: number, x2: number) { 
  let base = 2.7182818284590452353602874; 
  x1 = base ** -1 * ( 1 / (Math.log(x1) / Math.log(x2)));
  return x1;
}

export function $antilogaritmoBaseQualquerInversoHiperbolicoMenosUm(x1: number, x2: number) {
  let base = 2.7182818284590452353602874;
  x1 = base ** -1 * ( 1 / (Math.log1p(x1) / Math.log1p(x2)));
  return x1;
}

export function $cologaritmoNatural(x1: number) { 
  return -1 * Math.log(x1); 
}

export function $cologaritmoNaturalMaisUm(x1: number) {
  return -1 * Math.log1p(x1);
}

export function $cologaritmoBase10(x1: number) { 
  return -1 * Math.log10(x1);
}

export function $cologaritmoBase2(x1: number) { 
  return -1 * Math.log2(x1);
}

export function $cologaritmoBaseQualquer(x1: number, x2: number) { 
  return -1 * (Math.log(x1) / Math.log(x2));
}

export function $cologaritmoBaseQualquerMaisUm(x1: number, x2: number) {
  return -1 * (Math.log1p(x1) / Math.log1p(x2));
}

export function $cologaritmoNaturalInverso(x1: number) { 
  return -1 * (-1 * Math.log(x1));
}

export function $cologaritmoNaturalInversoMaisUm(x1: number) {
  return -1 * (-1 * Math.log1p(x1));
}

export function $cologaritmoBase10Inverso(x1: number) { 
  return -1 * (-1 * Math.log10(x1));
}

export function $cologaritmoBase2Inverso(x1: number) { 
  return -1 * (-1 * Math.log2(x1));
}

export function $cologaritmoBaseQualquerInverso(x1: number, x2: number) { 
  return -1 * (-1 * (Math.log(x1) / Math.log(x2)));
}

export function $cologaritmoBaseQualquerInversoMaisUm(x1: number, x2: number) {
  return -1 * (-1 * (Math.log1p(x1) / Math.log1p(x2)));
}

export function $cologaritmoNaturalHiperbolico(x1: number) { 
  return 1 / (-1 * Math.log(x1));
}

export function $cologaritmoNaturalHiperbolicoMaisUm(x1: number) {
  return 1 / (-1 * Math.log1p(x1));
}

export function $cologaritmoBase10Hiperbolico(x1: number) { 
  return 1 / (-1 * Math.log10(x1));
}

export function $cologaritmoBase2Hiperbolico(x1: number) { 
  return 1 / (-1 * Math.log2(x1));
}

export function $cologaritmoBaseQualquerHiperbolico(x1: number, x2: number) { 
  return 1 / (-1 * (Math.log(x1) / Math.log(x2)));
}

export function $cologaritmoBaseQualquerHiperbolicoMaisUm(x1: number, x2: number) {
  return 1 / (-1 * (Math.log1p(x1) / Math.log1p(x2)));
}

export function $cologaritmoNaturalInversoHiperbolico(x1: number) { 
  return 1 / (-1 * (-1 * Math.log(x1)));
}

export function $cologaritmoNaturalInversoHiperbolicoMaisUm(x1: number) {
  return 1 / (-1 * (-1 * Math.log1p(x1)));
}

export function $cologaritmoBase10InversoHiperbolico(x1: number) { 
  return 1 / (-1 * (-1 * Math.log10(x1)));
}

export function $cologaritmoBase2InversoHiperbolico(x1: number) { 
  return 1 / (-1 * (-1 * Math.log2(x1)));
}

export function $cologaritmoBaseQualquerInversoHiperbolico(x1: number, x2: number) { 
  return 1 / (-1 * (-1 * (Math.log(x1) / Math.log(x2))));
}

export function $cologaritmoBaseQualquerInversoHiperbolicoMaisUm(x1: number, x2: number) {
  return 1 / (-1 * (-1 * (Math.log1p(x1) / Math.log1p(x2))));
}