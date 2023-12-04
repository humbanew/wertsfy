import { raizQuadrada } from "./raiz_quadrada.mdl";

export var apotemaTriangulo = (lado: number): number => { 
  return (lado ** 2) * raizQuadrada(3) / 2;
};
