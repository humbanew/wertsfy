import { seno } from "./seno.mdl";

export var alcanceMaximoLancamentoVertical = (velocidade: number, angulo: number, gravidade: number): number => {
  return (velocidade ** 2 * (seno(angulo) ** 2)) / gravidade;
};
