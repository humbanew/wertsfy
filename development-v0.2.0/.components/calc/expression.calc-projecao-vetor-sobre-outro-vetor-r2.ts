const formulaCalcProjecaoDeUmVetorSobreOutroVetorR2 = (x1: number, x2: number, y1: number, y2: number): Array<number> => {
  let resultado: number[];
  let expressoesVU = [x2 * x1, y2 * y1] 
  let expressoesUU = [x1 * x1, y1 * y1]
  let contExpressaoP1 = [expressoesVU[0] / expressoesUU[0], expressoesVU[1] / expressoesUU[1]];
  let contExpressaoP2 = [contExpressaoP1[0] * x2, contExpressaoP1[1] * y2];
  resultado = contExpressaoP2;
  return resultado;
}
export { formulaCalcProjecaoDeUmVetorSobreOutroVetorR2 as Component_math_calculator_exp_calc_vetor_sobre_outro_vetor_r2_method }
