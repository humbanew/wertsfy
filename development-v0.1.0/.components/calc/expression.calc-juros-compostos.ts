const formulaCalculoDosJurosCompostos = (valor: number, taxa: number, tempo: number, vezes: number): number => {
  let resultado = (valor * (1 + taxa * tempo)) ** vezes; 
  return resultado;
}
export { formulaCalculoDosJurosCompostos as Component_math_calculator_juros_compostos_method }
