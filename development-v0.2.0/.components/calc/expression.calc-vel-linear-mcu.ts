import { Component_math_corebase_pi_constant } from "../math/constant.pi";

const formulaCalculoDoVelocidadeLinearMovimentoCircularUniforme = (frequencia: number, raio: number): number => {
  let resultado = (2 * Component_math_corebase_pi_constant * frequencia) * raio;
  return resultado;
}
export { formulaCalculoDoVelocidadeLinearMovimentoCircularUniforme as Component_math_calculator_exp_calc_velocidade_linear_movimento_circular_uniforme_method }
