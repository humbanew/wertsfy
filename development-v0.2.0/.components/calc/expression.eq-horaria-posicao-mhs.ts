import { Component_math_corebase_cos_method } from "../math/method.cos";

const formulaCalculoDaEquacaoHorariaDePosicaoDoMovimentoHarmonicoSimples = (velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number): number => {
  let resultado = velocidadeAngular * amplitude * Component_math_corebase_cos_method(tempo + faseInicial);
  return resultado;
}
export { formulaCalculoDaEquacaoHorariaDePosicaoDoMovimentoHarmonicoSimples as Component_math_calculator_exp_eq_horaria_posicao_movimento_harmonico_simples_method }
