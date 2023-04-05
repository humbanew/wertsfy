import { WertsfyPrototipos } from "../../.declarations/warch.prototype";

const formulaCalculoDoTeoremaDePascal = (tipo: WertsfyPrototipos.Logicos.Core["TExpressoes"]["variaveisDePascal"], forca1: number, forca2: number, area1: number, area2: number): number => {
  let resultado: number = 0;

  switch(tipo) {
    case "#area1Null":
      resultado = (forca1 * area2) / forca2; break;
    case "#area2Null":
      resultado = (forca2 * area1) / forca1; break;
    case "#forca1Null":
      resultado = (area1 * forca2) / area2; break;
    case "#forca2Null":
      resultado = (area2 * forca1) / area1; break;
  }
  return resultado;
}
export { formulaCalculoDoTeoremaDePascal as Component_math_calculator_exp_teo_pascal_method }
