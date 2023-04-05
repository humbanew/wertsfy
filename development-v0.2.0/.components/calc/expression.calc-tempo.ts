const formulaDoCalculoDoTempo = (velocidade: number, espaco: {inicial: number, final: number}): number => {
  return (espaco.final - espaco.inicial) / velocidade;
}
export { formulaDoCalculoDoTempo as Component_math_calculator_exp_calc_tempo_method }
