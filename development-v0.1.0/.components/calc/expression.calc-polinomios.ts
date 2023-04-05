import { WertsfyPrototipos } from "../../.declarations/warch.prototype";

const formulasDoCalculoDePolinomios = (tipo: WertsfyPrototipos.Logicos.Core["TExpressoes"]["operacoesComuns"], polinomios: {sent1: string, sent2: string }): string => {
  let resultado: string = '', verificaSinal: RegExp = /^(\-)/gi;
  if (verificaSinal != null) { polinomios.sent1.replace("-", ''); }
  if (verificaSinal != null) { polinomios.sent2.replace("-", ''); }
  switch(tipo) {
    case "#plus":
      resultado = polinomios.sent1 + '+' + polinomios.sent2; break;
    case "#minus":
      resultado = polinomios.sent1 + '-' + polinomios.sent2; break;
    case "#multip":
      resultado = polinomios.sent1 + '*' + polinomios.sent2; break;
    case "#divisor":
      resultado = polinomios.sent1 + '/' + polinomios.sent2; break;
  }
  return resultado;
}
export { formulasDoCalculoDePolinomios as Component_math_calculator_exp_calc_polinomios_method }
