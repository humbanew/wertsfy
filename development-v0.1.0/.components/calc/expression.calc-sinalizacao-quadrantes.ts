const formulaCalcSinalizacaoQuadrantes = (x: number, y: number): string => {
  let resultado: string;
  if(x > 0 && y > 0) { resultado = "1 Quadrante."; }
  if(x < 0 && y > 0) { resultado = "2 Quadrante."; }
  if(x < 0 && y < 0) { resultado = "3 Quadrante."; }
  if(x > 0 && y < 0) { resultado = "4 Quadrante."; }
  return resultado;
}
export { formulaCalcSinalizacaoQuadrantes as Component_math_calculator_exp_calc_sinalizacao_quadrantes_method }
