const formulaDoCalculoDaVelocidade = (espaco: {inicial: number, final: number}, tempo: {inicial: number, final: number}): number => {
  return (espaco.final - espaco.inicial) / (tempo.final - tempo.inicial);
}
export { formulaDoCalculoDaVelocidade as Component_math_calculator_exp_calc_velocidade_method }
