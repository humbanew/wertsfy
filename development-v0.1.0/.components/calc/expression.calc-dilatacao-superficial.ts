const formulaCalculoDaDilatacaoSuperficial = (areaInicial: number, coeficienteDeDilatacaoSuperficial: number, temperatura: {inicial: number, final: number}): number => {
  let resultado = areaInicial * coeficienteDeDilatacaoSuperficial * (temperatura.final - temperatura.inicial);
  return resultado;
}
export { formulaCalculoDaDilatacaoSuperficial as Component_math_calculator_exp_calc_dilatacao_superficial_method }
