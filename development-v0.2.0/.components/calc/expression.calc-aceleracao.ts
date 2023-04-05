const formulaDoCalculoDaAceleracao = (velocidade: number, tempo: {inicial: number, final: number}): number => {
  return velocidade / (tempo.final - tempo.inicial);
}
export { formulaDoCalculoDaAceleracao as Component_math_calculator_exp_calc_aceleracao_method }
