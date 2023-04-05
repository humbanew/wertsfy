export function $areaTrianguloQualquer(lado) { 
  return lado * lado * Math.sqrt(3) / 4; 
}

export function $apotemaDeUmTrianguloQualquer(lado) {
  return lado * lado * Math.sqrt(3) / 2;
}

export function $areaQuadradoQualquer(lado: number) { 
  return lado * lado; 
}

export function $areaRetanguloQualquer(comp: number, larg: number) { 
  return comp * larg; 
}

export function $areaCirculoQualquer(raio: number) { 
  return Math.PI * (raio ** 2); 
}

export function $areaElipseQualquer(raio: number, altura: number) { 
  return Math.PI * (raio ** 2) * altura; 
}

export function $areaPiramideQualquer(base: number, altura: number) { 
  return (base * altura) / 3; 
}

export function $areaTrapezioQualquer(baseMaior: number, baseMenor: number, altura: number) { 
  return (baseMaior + baseMenor) * altura / 2; 
}

export function $areaLozangoQualquer(diagonalMaior: number, diagonalMenor: number, altura: number) { 
  return (diagonalMaior + diagonalMenor) / 2; 
}

export function $areaDeUmaSuperficieQualquer(comp: number, larg: number) {
  return comp * larg;
}

export function $volumeDeUmaSuperficieQualquer(area: number, comp: number, larg: number) {
  return area * comp * larg;
}

export function $areaEsferaQualquer(raio: number) { 
  return 4 * Math.PI * (raio ** 2) / 2; 
}

export function $areaCilindroQualquer(raio: number, altura: number) { 
  return Math.PI * (raio ** 2) * altura; 
}

export function $areaConeQualquer(raio: number, altura: number) { 
  return Math.PI * (raio ** 2) * (altura / 3); 
}

export function $areaDeUmPoligonoQualquer(comp: number, larg: number, nLados: number) {
  return comp == larg ? nLados * ((comp * comp * Math.sqrt(3)) / 4) : nLados * (comp * larg / 2);
}

export function $volumeDeUmPoligonoFormatoLozangoQualquer(diagonalMaior: number, diagonalMenor: number, altura: number) {
  return (diagonalMaior + diagonalMenor) / 2 * altura;
}

export function $volumeDeUmPoligonoFormatoTrapezioQualquer(baseMaior: number, baseMenor: number, altura: number) {
  return (baseMaior + baseMenor) / 2 * altura;
}

export function $areaDeUmParalelogramoQualquer(lado: number, altura: number) { 
  return lado * altura; 
}

export function $areaLateralDeUmPrismaQualquer(comp: number, larg: number, nLados: number) {
  return nLados * (comp * larg);
}

export function $volumeDeUmPrismaQualquer(area: number, comp: number, larg: number) {
  return area * comp * larg;
}

export function $volumeDeUmCuboQualquer(aresta: number) { 
  return aresta * aresta * aresta; 
}

export function $volumeDeUmParalelepipedoQualquer(comprimento: number, largura: number, altura: number) { 
  return comprimento * largura * altura; 
}

export function $volumeDeUmPiramideQualquer(base: number, altura: number) { 
  return (base * altura) / 3; 
}

export function $volumeDeUmTetraedroQualquer(aresta: number) { 
  return (aresta * aresta * aresta) / 4; 
}

export function $volumeDeUmHexaedroQualquer(aresta: number) { 
  return (aresta * aresta * aresta) / 6; 
}

export function $volumeDeUmOctaedroQualquer(aresta: number) { 
  return (aresta * aresta * aresta) / 8; 
}

export function $volumeDeUmDodecaedroQualquer(aresta: number) { 
  return (aresta * aresta * aresta) / 12; 
}

export function $volumeDeUmIcosaedroQualquer(aresta: number) { 
  return (aresta * aresta * aresta) / 20; 
}

export function $volumeDeUmConeQualquer(raio: number, altura: number) { 
  return (Math.PI * (raio ** 2) * altura) / 3; 
}

export function $volumeDeUmCilindroQualquer(raio: number, altura: number) { 
  return Math.PI * (raio ** 2) * altura; 
}

export function $volumeDeUmEsferaQualquer(raio: number) { 
  return (4 * Math.PI * (raio ** 3)) / 3; 
}

export function $volumeDeUmRombQualquer(aresta: number) { 
  return (aresta * aresta) / 2; 
}

export function $areaCircunferenciaQualquer(raio: number) { 
  return Math.PI * (raio * 2); 
}