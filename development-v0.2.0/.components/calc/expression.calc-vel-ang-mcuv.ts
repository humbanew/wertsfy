const formulaCalculoDaAceleracaoAngularMovimentoCircularUniformenteVariado = (velocidadeAngular: { inicial: number, final: number}, tempo: { inicial: number, final: number}): number => {
  let resultado = (velocidadeAngular.final - velocidadeAngular.inicial) / (tempo.final - tempo.inicial);
  return resultado;
}
export { formulaCalculoDaAceleracaoAngularMovimentoCircularUniformenteVariado as Component_math_calculator_exp_calc_aceleracao_angular_movimento_circular_uniformente_variado_method }
