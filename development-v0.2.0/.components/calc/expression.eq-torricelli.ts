import { Component_math_corebase_sqrt_method } from "../math/method.sqrt";

const formulaCalculoDaEquacaoDeTorricelli = (velocidadeInicial: number, aceleracao: number, espaco: { inicial: number, final: number}): number => {
  let resultado = Component_math_corebase_sqrt_method((velocidadeInicial ** 2) + 2 * aceleracao * (espaco.final - espaco.inicial));
  return resultado;
}
export { formulaCalculoDaEquacaoDeTorricelli as Component_math_calculator_exp_eq_torricelli_method }
