const formulaCalcVetorDaDistanciaEntreDoisPontosR2 = (x1: number, x2:number, y1: number, y2: number): Array<number> => {
  let xResultante = 0, yResultante = 0, resultado: number[] = [];
  xResultante = x2 - x1;
  yResultante = y2 - y1;
  resultado = [ xResultante, yResultante ];
  return resultado;
}
export { formulaCalcVetorDaDistanciaEntreDoisPontosR2 as Component_math_calculator_exp_calc_vetor_distancia_entre_dois_pontos_r2_method }
