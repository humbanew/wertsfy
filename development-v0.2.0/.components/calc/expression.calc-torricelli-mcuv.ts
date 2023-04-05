import { Component_math_corebase_sqrt_method } from "../math/method.sqrt";

const formulaCalculoDeTorricelliMovimentoCircularUniformenteVariado = (velocidadeAngularInicial: number, aceleracaoAngular: number, deslocamentoAngular: { inicial: number, final: number}): number => {
  let resultado = Component_math_corebase_sqrt_method(velocidadeAngularInicial + 2 * aceleracaoAngular * (deslocamentoAngular.final - deslocamentoAngular.inicial));
  return resultado;
}
export { formulaCalculoDeTorricelliMovimentoCircularUniformenteVariado as Component_math_calculator_exp_calc_torricelli_movimento_circular_uniformente_variado_method }
