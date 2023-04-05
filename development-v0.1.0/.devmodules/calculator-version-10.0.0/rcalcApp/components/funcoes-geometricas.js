"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$areaCircunferenciaQualquer = exports.$volumeDeUmRombQualquer = exports.$volumeDeUmEsferaQualquer = exports.$volumeDeUmCilindroQualquer = exports.$volumeDeUmConeQualquer = exports.$volumeDeUmIcosaedroQualquer = exports.$volumeDeUmDodecaedroQualquer = exports.$volumeDeUmOctaedroQualquer = exports.$volumeDeUmHexaedroQualquer = exports.$volumeDeUmTetraedroQualquer = exports.$volumeDeUmPiramideQualquer = exports.$volumeDeUmParalelepipedoQualquer = exports.$volumeDeUmCuboQualquer = exports.$volumeDeUmPrismaQualquer = exports.$areaLateralDeUmPrismaQualquer = exports.$areaDeUmParalelogramoQualquer = exports.$volumeDeUmPoligonoFormatoTrapezioQualquer = exports.$volumeDeUmPoligonoFormatoLozangoQualquer = exports.$areaDeUmPoligonoQualquer = exports.$areaConeQualquer = exports.$areaCilindroQualquer = exports.$areaEsferaQualquer = exports.$volumeDeUmaSuperficieQualquer = exports.$areaDeUmaSuperficieQualquer = exports.$areaLozangoQualquer = exports.$areaTrapezioQualquer = exports.$areaPiramideQualquer = exports.$areaElipseQualquer = exports.$areaCirculoQualquer = exports.$areaRetanguloQualquer = exports.$areaQuadradoQualquer = exports.$apotemaDeUmTrianguloQualquer = exports.$areaTrianguloQualquer = void 0;
function $areaTrianguloQualquer(lado) {
    return lado * lado * Math.sqrt(3) / 4;
}
exports.$areaTrianguloQualquer = $areaTrianguloQualquer;
function $apotemaDeUmTrianguloQualquer(lado) {
    return lado * lado * Math.sqrt(3) / 2;
}
exports.$apotemaDeUmTrianguloQualquer = $apotemaDeUmTrianguloQualquer;
function $areaQuadradoQualquer(lado) {
    return lado * lado;
}
exports.$areaQuadradoQualquer = $areaQuadradoQualquer;
function $areaRetanguloQualquer(comp, larg) {
    return comp * larg;
}
exports.$areaRetanguloQualquer = $areaRetanguloQualquer;
function $areaCirculoQualquer(raio) {
    return Math.PI * (raio ** 2);
}
exports.$areaCirculoQualquer = $areaCirculoQualquer;
function $areaElipseQualquer(raio, altura) {
    return Math.PI * (raio ** 2) * altura;
}
exports.$areaElipseQualquer = $areaElipseQualquer;
function $areaPiramideQualquer(base, altura) {
    return (base * altura) / 3;
}
exports.$areaPiramideQualquer = $areaPiramideQualquer;
function $areaTrapezioQualquer(baseMaior, baseMenor, altura) {
    return (baseMaior + baseMenor) * altura / 2;
}
exports.$areaTrapezioQualquer = $areaTrapezioQualquer;
function $areaLozangoQualquer(diagonalMaior, diagonalMenor, altura) {
    return (diagonalMaior + diagonalMenor) / 2;
}
exports.$areaLozangoQualquer = $areaLozangoQualquer;
function $areaDeUmaSuperficieQualquer(comp, larg) {
    return comp * larg;
}
exports.$areaDeUmaSuperficieQualquer = $areaDeUmaSuperficieQualquer;
function $volumeDeUmaSuperficieQualquer(area, comp, larg) {
    return area * comp * larg;
}
exports.$volumeDeUmaSuperficieQualquer = $volumeDeUmaSuperficieQualquer;
function $areaEsferaQualquer(raio) {
    return 4 * Math.PI * (raio ** 2) / 2;
}
exports.$areaEsferaQualquer = $areaEsferaQualquer;
function $areaCilindroQualquer(raio, altura) {
    return Math.PI * (raio ** 2) * altura;
}
exports.$areaCilindroQualquer = $areaCilindroQualquer;
function $areaConeQualquer(raio, altura) {
    return Math.PI * (raio ** 2) * (altura / 3);
}
exports.$areaConeQualquer = $areaConeQualquer;
function $areaDeUmPoligonoQualquer(comp, larg, nLados) {
    return comp == larg ? nLados * ((comp * comp * Math.sqrt(3)) / 4) : nLados * (comp * larg / 2);
}
exports.$areaDeUmPoligonoQualquer = $areaDeUmPoligonoQualquer;
function $volumeDeUmPoligonoFormatoLozangoQualquer(diagonalMaior, diagonalMenor, altura) {
    return (diagonalMaior + diagonalMenor) / 2 * altura;
}
exports.$volumeDeUmPoligonoFormatoLozangoQualquer = $volumeDeUmPoligonoFormatoLozangoQualquer;
function $volumeDeUmPoligonoFormatoTrapezioQualquer(baseMaior, baseMenor, altura) {
    return (baseMaior + baseMenor) / 2 * altura;
}
exports.$volumeDeUmPoligonoFormatoTrapezioQualquer = $volumeDeUmPoligonoFormatoTrapezioQualquer;
function $areaDeUmParalelogramoQualquer(lado, altura) {
    return lado * altura;
}
exports.$areaDeUmParalelogramoQualquer = $areaDeUmParalelogramoQualquer;
function $areaLateralDeUmPrismaQualquer(comp, larg, nLados) {
    return nLados * (comp * larg);
}
exports.$areaLateralDeUmPrismaQualquer = $areaLateralDeUmPrismaQualquer;
function $volumeDeUmPrismaQualquer(area, comp, larg) {
    return area * comp * larg;
}
exports.$volumeDeUmPrismaQualquer = $volumeDeUmPrismaQualquer;
function $volumeDeUmCuboQualquer(aresta) {
    return aresta * aresta * aresta;
}
exports.$volumeDeUmCuboQualquer = $volumeDeUmCuboQualquer;
function $volumeDeUmParalelepipedoQualquer(comprimento, largura, altura) {
    return comprimento * largura * altura;
}
exports.$volumeDeUmParalelepipedoQualquer = $volumeDeUmParalelepipedoQualquer;
function $volumeDeUmPiramideQualquer(base, altura) {
    return (base * altura) / 3;
}
exports.$volumeDeUmPiramideQualquer = $volumeDeUmPiramideQualquer;
function $volumeDeUmTetraedroQualquer(aresta) {
    return (aresta * aresta * aresta) / 4;
}
exports.$volumeDeUmTetraedroQualquer = $volumeDeUmTetraedroQualquer;
function $volumeDeUmHexaedroQualquer(aresta) {
    return (aresta * aresta * aresta) / 6;
}
exports.$volumeDeUmHexaedroQualquer = $volumeDeUmHexaedroQualquer;
function $volumeDeUmOctaedroQualquer(aresta) {
    return (aresta * aresta * aresta) / 8;
}
exports.$volumeDeUmOctaedroQualquer = $volumeDeUmOctaedroQualquer;
function $volumeDeUmDodecaedroQualquer(aresta) {
    return (aresta * aresta * aresta) / 12;
}
exports.$volumeDeUmDodecaedroQualquer = $volumeDeUmDodecaedroQualquer;
function $volumeDeUmIcosaedroQualquer(aresta) {
    return (aresta * aresta * aresta) / 20;
}
exports.$volumeDeUmIcosaedroQualquer = $volumeDeUmIcosaedroQualquer;
function $volumeDeUmConeQualquer(raio, altura) {
    return (Math.PI * (raio ** 2) * altura) / 3;
}
exports.$volumeDeUmConeQualquer = $volumeDeUmConeQualquer;
function $volumeDeUmCilindroQualquer(raio, altura) {
    return Math.PI * (raio ** 2) * altura;
}
exports.$volumeDeUmCilindroQualquer = $volumeDeUmCilindroQualquer;
function $volumeDeUmEsferaQualquer(raio) {
    return (4 * Math.PI * (raio ** 3)) / 3;
}
exports.$volumeDeUmEsferaQualquer = $volumeDeUmEsferaQualquer;
function $volumeDeUmRombQualquer(aresta) {
    return (aresta * aresta) / 2;
}
exports.$volumeDeUmRombQualquer = $volumeDeUmRombQualquer;
function $areaCircunferenciaQualquer(raio) {
    return Math.PI * (raio * 2);
}
exports.$areaCircunferenciaQualquer = $areaCircunferenciaQualquer;
//# sourceMappingURL=funcoes-geometricas.js.map