import { raizQuadrada } from "./raiz_quadrada.mdl";

export var teoremaPitagorasClassico = (a: number, b: number): number => {
  return raizQuadrada(((a ** 2) + (b ** 2)));
};
