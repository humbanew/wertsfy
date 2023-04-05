import { Component_math_corebase_cos_method } from "../math/method.cos";

const formulaCalculoDaAceleracaoNoPlanoInclinadoEixoY = (massa: number, gravidade: number, angulo: number): number => {
  let resultado = massa * gravidade * Component_math_corebase_cos_method(angulo);
  return resultado;
}
export { formulaCalculoDaAceleracaoNoPlanoInclinadoEixoY as Component_math_calculator_exp_calc_aceleracao_no_plano_inclinado_eixo_y_method }
