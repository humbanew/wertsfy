import { Component_math_corebase_sin_method } from "../math/method.sin";

const formulaCalculoDaAceleracaoNoPlanoInclinadoEixoX = (massa: number, gravidade: number, angulo: number): number => {
  let resultado = massa * gravidade * Component_math_corebase_sin_method(angulo);
  return resultado;
}
export { formulaCalculoDaAceleracaoNoPlanoInclinadoEixoX as Component_math_calculator_exp_calc_aceleracao_no_plano_inclinado_eixo_x_method }
