const formulaCalculoDaEquacaoHorariaDoEspacoMovimentoCircularUniformenteVariado = (posicaoAngularInicial: number, velocidadeAngularInicial: number, aceleracaoAngular: number, tempo: number): number => {
  let resultado = posicaoAngularInicial + (velocidadeAngularInicial * tempo) + (aceleracaoAngular * tempo ** 2) / 2;
  return resultado;
}
export { formulaCalculoDaEquacaoHorariaDoEspacoMovimentoCircularUniformenteVariado as Component_math_calculator_exp_eq_horaria_espaco_movimento_circular_uniformente_variado_method }
