import { WertsfyTypes } from "../../.declarations/wexport";
import { Component_math_calculator_exp_calc_porcentagem_method } from "./expression.calc-porcentagem";

const formulaCalculoDoRendimento = (valorParte: number, valorTotal: number): number => {
  let resultado = Component_math_calculator_exp_calc_porcentagem_method(
    WertsfyTypes.logicos.expressoes.porcentagem = ["#AnyNumber", { value: valorParte, valueTotal: valorTotal } ]
  );
  return resultado;
}
export { formulaCalculoDoRendimento as Component_math_calculator_exp_calc_rendimento_method }
