import { raizQuadrada } from "./raiz_quadrada.mdl";

export var areaPoligono = (lados: number, comprimento: number, largura: number): number => {
  return comprimento == largura ? lados * ((comprimento * comprimento * raizQuadrada(3)) / 4) : lados * (comprimento * largura / 2);
};
