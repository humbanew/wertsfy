import { Component_math_corebase_sin_method } from "../math/method.sin";

const formulaCalculoDoAlcanceMaximoDeUmLancamentoVertical = (velocidade: number, angulo: number, gravidade: number): number => {
  let resultado = (velocidade ** 2 * (Component_math_corebase_sin_method(angulo) ** 2)) / gravidade;
  return resultado;
}
export {  formulaCalculoDoAlcanceMaximoDeUmLancamentoVertical as Component_math_calculator_exp_calc_alcance_maximo_lancamento_vertical_method }
