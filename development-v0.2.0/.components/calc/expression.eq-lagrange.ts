const formulaCalculoDaEquacaoDeLagrange = (x: number, y: number, xi: number, yi: number, xii: number, yii: number, xiii: number, yiii: number): number => {
  let resultado = (x - xi) * (y - yi) / (x - xi) * (y - yii) / (x - xii) * (y - yiii) / (x - xiii);
  return resultado;
}
export { formulaCalculoDaEquacaoDeLagrange as Component_math_calculator_exp_eq_lagrange_method }
