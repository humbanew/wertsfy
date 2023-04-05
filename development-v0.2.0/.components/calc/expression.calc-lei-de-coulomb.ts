const formulaCalculoDaLeiDeCoulomb = (carga1: number, carga2: number, distancia: number): number => {
  let resultado = (9 * 10 ** 9) * (carga1 * carga2 / distancia ** 2);
  return resultado;
}
export { formulaCalculoDaLeiDeCoulomb as Component_math_calculator_exp_calc_lei_de_coulomb_method }
