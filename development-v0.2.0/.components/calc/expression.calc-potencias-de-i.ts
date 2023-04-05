const formulaDoCalculoDasPotenciasDeI = (valor: number): string => {
  let resultado = '', divisor = valor % 4;

  switch(divisor) {
    case 0:
      resultado = 'i'; break;
    case 1:
      resultado = '-1'; break;
    case 2:
      resultado = '-1'; break;
    case 3:
      resultado = '1'; break;
  }
  return resultado;
}
export { formulaDoCalculoDasPotenciasDeI as Component_math_calculator_exp_calc_potencias_de_i_method }
