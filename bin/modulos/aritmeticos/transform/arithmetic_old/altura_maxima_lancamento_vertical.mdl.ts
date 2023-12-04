import { seno } from "./seno.mdl";

export var alturaMaximaLancamentoVertical = (velocidadeInicial: number, gravidade: number, angulo: number): number => {
  return (velocidadeInicial ** 2) * ((seno(angulo) ** 2) / 2) * gravidade;
};
