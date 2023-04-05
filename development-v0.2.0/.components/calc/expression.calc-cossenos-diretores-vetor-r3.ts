import { Component_math_corebase_cos_method } from "../math/method.cos";

const formulaCalcCossenosDiretoresDeUmVetorR3 = (x: number, y: number, z: number): Array<number> => {
  let resultado: number[];
  let contExpressaoP1 = [Component_math_corebase_cos_method(x), Component_math_corebase_cos_method(y), Component_math_corebase_cos_method(z)];
  resultado = contExpressaoP1;
  return resultado;
}
export { formulaCalcCossenosDiretoresDeUmVetorR3 as Component_math_calculator_exp_calc_cossenos_diretores_vetor_r3_method }
