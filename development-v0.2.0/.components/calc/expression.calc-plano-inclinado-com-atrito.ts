const formulaCalculoDoPlanoInclinadoComAtrito = (forcaDeAtrito: number, massa: number, gravidade: number, angulo: number): number => {
  let resultado = forcaDeAtrito * massa * gravidade * angulo;
  return resultado;
}
export { formulaCalculoDoPlanoInclinadoComAtrito as Component_math_calculator_exp_calc_plano_inclinado_com_atrito_method }
