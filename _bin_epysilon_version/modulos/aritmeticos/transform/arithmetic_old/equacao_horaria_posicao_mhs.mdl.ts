import { cosseno } from "./cosseno.mdl";

export var equacaoHorariaDePosicaoMHS = (velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number): number => {
  return velocidadeAngular * amplitude * cosseno(tempo + faseInicial);
};
