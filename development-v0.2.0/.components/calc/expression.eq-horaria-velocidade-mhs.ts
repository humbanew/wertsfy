import { Component_math_corebase_sin_method } from "../math/method.sin";

const formulaCalculoDaEquacaoHorariaDeVelocidadeDoMovimentoHarmonicoSimples = (velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number): number => {
  let resultado = -1 * velocidadeAngular * amplitude * Component_math_corebase_sin_method(tempo + faseInicial);
  return resultado;
}
export { formulaCalculoDaEquacaoHorariaDeVelocidadeDoMovimentoHarmonicoSimples as Component_math_calculator_exp_eq_horaria_velocidade_movimento_harmonico_simples_method }
