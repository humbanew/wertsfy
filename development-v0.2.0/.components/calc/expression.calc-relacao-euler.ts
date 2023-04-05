const formulaDoCalculoDaRelacaoDeEuler = (vertices: number, arestas: number, faces: number): number => {
  return (vertices - (arestas + faces)) - 2;
}
export { formulaDoCalculoDaRelacaoDeEuler as Component_math_calculator_exp_calc_relacao_euler_method }
