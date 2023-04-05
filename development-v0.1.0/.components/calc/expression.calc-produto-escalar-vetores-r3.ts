const formulaCalcProdutoEscalarDeVetoresR3 = (x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): number => {
  let resultado: number;
  let contExpressaoP1 = [x1 * x2, y1 * y2, z1 * z2];
  resultado = contExpressaoP1[0] + contExpressaoP1[1] + contExpressaoP1[2];
  return resultado;
}
export { formulaCalcProdutoEscalarDeVetoresR3 as Component_math_calculator_exp_calc_produto_escalar_vetores_r3_method }
