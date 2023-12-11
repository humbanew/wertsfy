import { raizQuadrada } from "./raiz_quadrada.mdl";

export var torricelliMCUV = (velocidadeAngularInicial: number, aceleracaoAngular: number, deslocamentoAngular: { inicial: number, final: number}): number => {
  let resultado = raizQuadrada(velocidadeAngularInicial + 2 * aceleracaoAngular * (deslocamentoAngular.final - deslocamentoAngular.inicial));
  return resultado;
};
