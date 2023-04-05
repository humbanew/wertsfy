const formulaCalcProjecaoDeUmVetorSobreOutroVetorR3 = (x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): Array<number> => {
  let resultado: number[];
  let expressoesVU = [x2 * x1, y2 * y1, z2 * z1] 
  let expressoesUU = [x1 * x1, y1 * y1, z1 * z1]
  let contExpressaoP1 = [expressoesVU[0] / expressoesUU[0], expressoesVU[1] / expressoesUU[1], expressoesVU[2] / expressoesUU[2]];
  let contExpressaoP2 = [contExpressaoP1[0] * x2, contExpressaoP1[1] * y2, contExpressaoP1[2] * z2];
  resultado = contExpressaoP2;
  return resultado;
}
export { formulaCalcProjecaoDeUmVetorSobreOutroVetorR3 as Component_math_calculator_exp_calc_vetor_sobre_outro_vetor_r3_method }
