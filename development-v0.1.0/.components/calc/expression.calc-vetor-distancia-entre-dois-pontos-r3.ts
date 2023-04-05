const formulaCalcVetorDaDistanciaEntreDoisPontosR3 = (x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): Array<number> => {
  let xResultante = 0, yResultante = 0, zResultante = 0, resultado: number[] = [];
  xResultante = x2 - x1;
  yResultante = y2 - y1;
  zResultante = z2 - z1;
  resultado = [ xResultante, yResultante, zResultante ];
  return resultado;
}
export { formulaCalcVetorDaDistanciaEntreDoisPontosR3 as Component_math_calculator_exp_calc_vetor_distancia_entre_dois_pontos_r3_method }
