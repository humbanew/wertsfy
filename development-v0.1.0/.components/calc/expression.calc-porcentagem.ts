import { WertsfyPrototipos } from "../../.declarations/warch.prototype";

const formulasDoCalculoDePorcentagem = (tipo: WertsfyPrototipos.Logicos.Core["TExpressoes"]["porcentagem"]) => {

  let resultado = 0, variavel = tipo;

  switch(variavel[0]) {
    case "#10E2":
      resultado = variavel[1].value / 10 ** 2; break;
    case "#10E3":
      resultado = variavel[1].value / 10 ** 3; break;
    case "#10E4":
      resultado = variavel[1].value / 10 ** 4; break;
    case "#10E5":
      resultado = variavel[1].value / 10 ** 5; break;
    case "#AnyNumber":  
      resultado = variavel[1].value / variavel[1].valueTotal; break;
  }
  return resultado;
}
export { formulasDoCalculoDePorcentagem as Component_math_calculator_exp_calc_porcentagem_method }
