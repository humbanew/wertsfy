import { cosseno } from "./cosseno.mdl";

export var equacaoHorariaDeAceleracaoMHS = (velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number): number => {
  return -1 * velocidadeAngular ** 2 * amplitude * cosseno(tempo + faseInicial);
};
