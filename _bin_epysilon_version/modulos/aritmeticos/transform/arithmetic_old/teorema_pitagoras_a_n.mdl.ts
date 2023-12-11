import { raizQuadrada } from "./raiz_quadrada.mdl";

export var teoremaPitagorasAN = (a: number, n: number): number => {
  return raizQuadrada(a * n);
};
