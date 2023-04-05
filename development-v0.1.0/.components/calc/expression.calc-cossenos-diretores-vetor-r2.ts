import { Component_math_corebase_cos_method } from "../math/method.cos";

const formulaCalcCossenosDiretoresDeUmVetorR2 = (x: number, y: number): Array<number> => {
  let resultado: number[];
  let contExpressaoP1 = [Component_math_corebase_cos_method(x), Component_math_corebase_cos_method(y)];
  resultado = contExpressaoP1;
  return resultado;
}
export { formulaCalcCossenosDiretoresDeUmVetorR2 as Component_math_calculator_exp_calc_cossenos_diretores_vetor_r2_method }
