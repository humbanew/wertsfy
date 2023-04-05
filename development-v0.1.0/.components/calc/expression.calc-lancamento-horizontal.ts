const formulaCalculoDoLancamentoHorizontal = (gravidade: number, tempo: number): number => {
  let resultado = (gravidade * tempo ** 2) / 2;
  return resultado;
}
export { formulaCalculoDoLancamentoHorizontal as Component_math_calculator_exp_calc_lancamento_horizontal_method }
