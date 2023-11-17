import { raizQuadrada } from "./raiz_quadrada.mdl";

export var areaTriangulo = (lado: number): number => {
  return (lado ** 2) * raizQuadrada(3) / 4;
};

export var areaApotema = (lado: number): number => {
  return (lado ** 2) * raizQuadrada(3) / 2;
}
