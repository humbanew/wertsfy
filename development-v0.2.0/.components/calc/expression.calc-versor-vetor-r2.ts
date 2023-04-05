import { Component_math_calculator_exp_calc_modulo_vetor_r2_method } from "./expression.calc-modulo-vetor-r2";

const formulaCalcVersorDeUmVetorR2 = (x: number, y:number): Array<number> => {
  let resultado = [];
  let modulo = Component_math_calculator_exp_calc_modulo_vetor_r2_method(x, y);
  resultado = [ x / modulo, y / modulo ];
  return resultado;
}
export { formulaCalcVersorDeUmVetorR2 as Component_math_calculator_exp_calc_versor_vetor_r2_method }
