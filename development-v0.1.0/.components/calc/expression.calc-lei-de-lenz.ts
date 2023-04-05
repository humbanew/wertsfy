import { Component_math_corebase_cos_method } from "../math/method.cos";

const formulaCalculoDaLeiDeLenz = (intensidadeDoCampoMagnetico: number, areaDaSuperficie: number, cosAngulo: number): number => {
  let resultado = intensidadeDoCampoMagnetico * areaDaSuperficie * Component_math_corebase_cos_method(cosAngulo);
  return resultado;
}
export { formulaCalculoDaLeiDeLenz as Component_math_calculator_exp_calc_lei_de_lenz_method }
