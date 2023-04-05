import { Component_math_corebase_sin_method } from "../math/method.sin";

const formulaCalculoDaAlturaMaximaDeUmLancamentoVertical = (velocidadeInicial: number, gravidade: number, angulo: number): number => {
  let resultado = (velocidadeInicial ** 2) * ((Component_math_corebase_sin_method(angulo) ** 2) / 2) * gravidade;
  return resultado;
}
export { formulaCalculoDaAlturaMaximaDeUmLancamentoVertical as Component_math_calculator_exp_calc_altura_maxima_lancamento_vertical_method }
