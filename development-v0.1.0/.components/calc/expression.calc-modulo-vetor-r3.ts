import { Component_math_corebase_sqrt_method } from "../math/method.sqrt";

const formulaCalcModuloDeUmVetorR3 = (x: number, y: number, z: number): number => {
  let resultado = 0;
  resultado = Component_math_corebase_sqrt_method(x ** 2 + y ** 2 + z ** 2);
  return resultado;
}
export { formulaCalcModuloDeUmVetorR3 as Component_math_calculator_exp_calc_modulo_vetor_r3_method }
