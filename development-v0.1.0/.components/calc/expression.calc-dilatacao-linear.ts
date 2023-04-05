const formulaCalculoDaDilatacaoLinear = (comprimentoInicial: number, coeficienteDeDilatacaoLinear: number, temperatura: { inicial: number, final: number}): number => {
  let resultado = comprimentoInicial * coeficienteDeDilatacaoLinear * (temperatura.final - temperatura.inicial);
  return resultado;
}
export { formulaCalculoDaDilatacaoLinear as Component_math_calculator_exp_calc_dilatacao_linear_method }
