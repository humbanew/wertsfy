const formulaCalcProdutoEscalarDeVetoresR2 = (x1: number, x2: number, y1: number, y2: number): number => {
  let resultado: number;
  let contExpressaoP1 = [x1 * x2, y1 * y2];
  resultado = contExpressaoP1[0] + contExpressaoP1[1];
  return resultado;
}
export { formulaCalcProdutoEscalarDeVetoresR2 as Component_math_calculator_exp_calc_produto_escalar_vetores_r2_method }
