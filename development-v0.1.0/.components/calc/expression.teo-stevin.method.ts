const formulaCalculoDoTeoremaDeStevin = (densidade: number, gravidade: number, alturaInicial: number, alturaFinal: number): number => {
  let resultado = densidade * gravidade * (alturaFinal - alturaInicial);
  return resultado;
}
export { formulaCalculoDoTeoremaDeStevin as Component_math_calculator_exp_teo_stevin_method }
