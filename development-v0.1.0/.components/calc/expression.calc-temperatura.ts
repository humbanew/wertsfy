import { WertsfyPrototipos } from "../../.declarations/warch.prototype";

const formulaCalculoDaTemperatura = (tipo: WertsfyPrototipos.Logicos.Core["TExpressoes"]["variaveisDeTemperatura"], valor: number): number => {
  let resultado: number = 0;

  switch(tipo) {
    case "#celsiusFahrenheit":
      resultado = (1.8 * valor) + 32; break;
    case "#celsiusKelvin":
      resultado = valor - 273; break;
    case "#fahrenheitCelsius":
      resultado = (valor - 32) / 1.8; break;
    case "#fahrenheitKelvin":
      resultado = ((valor - 32) * 5) / 9 + 273; break;
    case "#kelvinCelsius":
      resultado = valor + 273; break;
    case "#kelvinFahrenheit":
      resultado = (valor - 273) * 1.8 + 32; break;
  }

  return resultado;
}
export { formulaCalculoDaTemperatura as Component_math_calculator_exp_calc_temperatura_method }
