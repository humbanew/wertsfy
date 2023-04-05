const formulaCalculoDoVelocidadeAngularMovimentoCircularUniforme = (angulo: { inicial: number, final: number}, tempo: { inicial: number, final: number}): number => {
  let resultado = (angulo.final - angulo.inicial) / (tempo.final - tempo.inicial);
  return resultado;
}
export { formulaCalculoDoVelocidadeAngularMovimentoCircularUniforme as Component_math_calculator_exp_calc_velocidade_angular_movimento_circular_uniforme_method }
