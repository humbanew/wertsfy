const formulaCalculoDoConsumoDeEnergia = (tempo: number, correnteEletrica: number, ddp: number): number => {
  let resultado = correnteEletrica * ddp * tempo;
  return resultado;
}
export { formulaCalculoDoConsumoDeEnergia as Component_math_calculator_exp_calc_consumo_de_energia_method }
