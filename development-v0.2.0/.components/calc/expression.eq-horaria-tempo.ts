const formulaCalculoDaEquacaoHorariaDoTempo = (tempo: { inicial: number, final: number }, velocidade: number, aceleracao: number): number => {
  return tempo.inicial + (velocidade * tempo.final) + (aceleracao * (tempo.final ** 2));
}
export { formulaCalculoDaEquacaoHorariaDoTempo as Component_math_calculator_exp_eq_horaria_tempo_method }
