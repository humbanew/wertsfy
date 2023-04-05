const formulaCalculoDosJurosSimples = (valor: number, taxa: number, tempo: number): number => {
  let resultado = valor * (1 + taxa * tempo);
  return resultado;
}
export { formulaCalculoDosJurosSimples as Component_math_calculator_juros_simples_method }
