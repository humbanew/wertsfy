import { WertsfyPrototipos } from "../../.declarations/warch.prototype";
import { Component_math_corebase_sqrt_method } from "../math/method.sqrt";

const formulaDoTeoremaDePitagoras = (tipo: WertsfyPrototipos.Logicos.Core["TExpressoes"]["triangulosPitagoricos"]): number => {
  let resultado = 0;
  switch(tipo[0]) {
    case "#classic(a and b)":
      resultado = Component_math_corebase_sqrt_method(((tipo[1].a ** 2) + (tipo[1].b ** 2))); break;
    case "#t1(m and n)":
      resultado = Component_math_corebase_sqrt_method(tipo[1].m * tipo[1].n); break;
    case "#t2(a and n)":
      resultado = Component_math_corebase_sqrt_method(tipo[1].a * tipo[1].n); break;
    case "#t3(b, c and h)":  
      resultado = (tipo[1].b * tipo[1].c) / tipo[1].h; break;
  }
  return resultado;
}
export { formulaDoTeoremaDePitagoras as Component_math_calculator_exp_teo_pitagoras_method }
