const formulaCalculoDoEmpuxoDaHidroestaticaHidrodinamica = (densidade: number, gravidade: number, volume: number): number => {
  let resultado = densidade * gravidade * volume;
  return resultado;
}
export { formulaCalculoDoEmpuxoDaHidroestaticaHidrodinamica as Component_math_calculator_exp_calc_empuxo_hidroestatica_hidrodinamica_method }
