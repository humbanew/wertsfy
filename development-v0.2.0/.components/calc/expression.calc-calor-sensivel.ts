const formulaCalculoDoCalorSensivel = (massa: number, calorEspecifico: number, temperatura: {inicial: number, final: number}): number => {
  let resultado = massa * calorEspecifico * (temperatura.final - temperatura.inicial);
  return resultado;
}
export { formulaCalculoDoCalorSensivel as Component_math_calculator_exp_calc_calor_sensivel_method }
