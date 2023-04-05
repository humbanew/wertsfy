const formulaCalcSinalizacaoOctantes = (x: number, y: number, z: number): string => {
  let resultado: string;
  if(x > 0 && y > 0 && z > 0) { resultado = "1 Octante."; }
  if(x < 0 && y > 0 && z > 0) { resultado = "2 Octante."; }
  if(x < 0 && y < 0 && z > 0) { resultado = "3 Octante."; }
  if(x > 0 && y < 0 && z > 0) { resultado = "4 Octante."; }
  if(x > 0 && y > 0 && z < 0) { resultado = "5 Octante."; }
  if(x < 0 && y > 0 && z < 0) { resultado = "6 Octante."; }
  if(x < 0 && y < 0 && z < 0) { resultado = "7 Octante."; }
  if(x > 0 && y < 0 && z < 0) { resultado = "8 Octante."; }
  return resultado;
}
export { formulaCalcSinalizacaoOctantes as Component_math_calculator_exp_calc_sinalizacao_octantes_method }
