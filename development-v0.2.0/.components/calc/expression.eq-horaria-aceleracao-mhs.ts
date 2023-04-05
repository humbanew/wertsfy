import { Component_math_corebase_cos_method } from "../math/method.cos";

const formulaCalculoDaEquacaoHorariaDeAceleracaoDoMovimentoHarmonicoSimples = (velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number): number => {
  let resultado = -1 * velocidadeAngular ** 2 * amplitude * Component_math_corebase_cos_method(tempo + faseInicial);
  return resultado;
}
export { formulaCalculoDaEquacaoHorariaDeAceleracaoDoMovimentoHarmonicoSimples as Component_math_calculator_exp_eq_horaria_aceleracao_movimento_harmonico_simples_method }
