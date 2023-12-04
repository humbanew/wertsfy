import { raizQuadrada } from "./raiz_quadrada.mdl";

export var equacaoDeTorricelli = (velocidadeInicial: number, aceleracao: number, espaco: { inicial: number, final: number}): number => {
  let resultado = raizQuadrada((velocidadeInicial ** 2) + 2 * aceleracao * (espaco.final - espaco.inicial));
  return resultado;
};
