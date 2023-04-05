const formulaDoCalculoDeUmConjugadoDeNumeroComplexo = (expressao: string): string => {
  let resultado = '', verificaSinal = /^(\-)/gi;
  if (verificaSinal != null) { expressao.replace("-", ''); }
  resultado = expressao;
  return resultado;
}
export { formulaDoCalculoDeUmConjugadoDeNumeroComplexo as Component_math_calculator_exp_calc_conjugado_numero_complexo_method }
