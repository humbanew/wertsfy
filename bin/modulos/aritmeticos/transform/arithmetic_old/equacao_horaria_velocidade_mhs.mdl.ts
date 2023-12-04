import { seno } from "./seno.mdl";

export var equacaoHorariaDeVelocidadeMHS = (velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number): number => {
  let resultado = -1 * velocidadeAngular * amplitude * seno(tempo + faseInicial);
  return resultado;
};
