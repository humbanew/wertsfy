import { WertsfyPrototipos } from "../../.declarations/warch.prototype";

const formulasDoCalculoDeDeterminante = (tipo: WertsfyPrototipos.Logicos.Core["TExpressoes"]["determinantes"]): number => {
  let resultado: number = 0;
  switch(tipo[0]) {
    case "#d2x2":
      let vetorPrimario = tipo[1].a00 * tipo[1].a11;
      let vetorSecundario = tipo[1].a01 * tipo[1].a10;
      resultado = vetorPrimario - vetorSecundario; break;
    case "#d3x3":
      let vetorPrincipal1 = tipo[1].a00 * tipo[1].a11 * tipo[1].a22; 
      let vetorPrincipal2 = tipo[1].a01 * tipo[1].a12 * tipo[1].a20; 
      let vetorPrincipal3 = tipo[1].a02 * tipo[1].a10 * tipo[1].a21;
      let vetorSecundario1 = tipo[1].a02 * tipo[1].a11 * tipo[1].a20; 
      let vetorSecundario2 = tipo[1].a00 * tipo[1].a12 * tipo[1].a21; 
      let vetorSecundario3 = tipo[1].a01 * tipo[1].a10 * tipo[1].a22;
      resultado = (vetorPrincipal1 + vetorPrincipal2 + vetorPrincipal3) - (vetorSecundario1 + vetorSecundario2 + vetorSecundario3);
      break;
  }
  return resultado;
}
export { formulasDoCalculoDeDeterminante as Component_math_calculator_exp_calc_determinante_method }
