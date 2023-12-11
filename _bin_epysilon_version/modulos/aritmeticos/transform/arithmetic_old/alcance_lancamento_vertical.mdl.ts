import { cosseno } from "./cosseno.mdl";

export var alcanceLancamentoVertical = (velocidade: number, tempo: {inicial: number, final: number}, angulo: number): number => {
  return velocidade * cosseno(angulo) * (tempo.final - tempo.inicial);
};
