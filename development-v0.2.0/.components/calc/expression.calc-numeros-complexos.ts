import { WertsfyPrototipos } from "../../.declarations/warch.prototype";

const formulasDosNumerosComplexos = (tipo: WertsfyPrototipos.Logicos.Core["TComuns"], expressions: string[], potency?: number): string|void => {
  let verif = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
  let separadorT1 = /^(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)/gim;
  let separadorT2 = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
  let resultado = "";
  let resultadoPartImaginarias: number|string;
  let resultadoPartImaginariasPuras: number|string;
  let partesImaginarias = [];
  let partesImaginariasPuras = [];
  let resultadoParcImaginario = 0;
  let resultadoParcImaginarioPuro = 0;
  let valorTotalPartImaginarias = "";
  let valorTotalPartImaginariasPuras = "";

  for (let i = 0; i < expressions.length; i++) {
    if (expressions[i].match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }
    partesImaginarias.push(expressions[i].match(separadorT1).toString());
    partesImaginariasPuras.push(expressions[i].match(separadorT2).toString());
  }
  switch(tipo["modelo"]) {
    case "#plus":
      resultadoPartImaginarias = 0;
      resultadoPartImaginariasPuras = 0;
      for (let i = 0; i < partesImaginarias.length; i++) {
        resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
      }
      for (let i = 0; i < partesImaginariasPuras.length; i++) {
        resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
      }
      break;
    case "#minus":      
      resultadoPartImaginarias = "";
      resultadoPartImaginariasPuras = "";
      for (let i = 0; i < partesImaginarias.length; i++) {
        resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
      }
      for (let i = 0; i < partesImaginariasPuras.length; i++) {
        resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
      }
      resultadoParcImaginario = parseFloat(valorTotalPartImaginarias) - parseFloat(resultadoPartImaginarias);
      resultadoParcImaginarioPuro = parseFloat(valorTotalPartImaginariasPuras) - parseFloat(resultadoPartImaginariasPuras);
    case "#multip":
      resultadoPartImaginarias = "";
      resultadoPartImaginariasPuras = "";
      for (let i = 0; i < partesImaginarias.length; i++) {
        resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
      }
      for (let i = 0; i < partesImaginariasPuras.length; i++) {
        resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
      }
      resultadoParcImaginario = parseFloat(valorTotalPartImaginarias) * parseFloat(resultadoPartImaginarias);
      resultadoParcImaginarioPuro = parseFloat(valorTotalPartImaginariasPuras) * parseFloat(resultadoPartImaginariasPuras);
    case "#divisor":
      resultadoPartImaginarias = "";
      resultadoPartImaginariasPuras = "";
      for (let i = 0; i < partesImaginarias.length; i++) {
        resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
      }
      for (let i = 0; i < partesImaginariasPuras.length; i++) {
        resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
      }
      resultadoParcImaginario = parseFloat(valorTotalPartImaginarias) / parseFloat(resultadoPartImaginarias);
      resultadoParcImaginarioPuro = parseFloat(valorTotalPartImaginariasPuras) / parseFloat(resultadoPartImaginariasPuras);
    case "#power":
      resultadoPartImaginarias = 0;
      resultadoPartImaginariasPuras = 0;
      for (let i = 0; i < partesImaginarias.length; i++) {
        resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
      }
      for (let i = 0; i < partesImaginariasPuras.length; i++) {
        resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
      }
      resultadoParcImaginario = parseFloat(valorTotalPartImaginarias + resultadoPartImaginarias ** potency);
      resultadoParcImaginarioPuro = parseFloat(valorTotalPartImaginariasPuras + resultadoPartImaginariasPuras ** potency);
  }
  if (resultadoPartImaginarias < 0 && resultadoPartImaginariasPuras < 0) { resultado = `${resultadoPartImaginarias}${resultadoPartImaginariasPuras}i`; }
  if (resultadoPartImaginarias > 0 && resultadoPartImaginariasPuras < 0) { resultado = `${resultadoPartImaginarias}${resultadoPartImaginariasPuras}i`; }
  if (resultadoPartImaginarias < 0 && resultadoPartImaginariasPuras > 0) { resultado = `${resultadoPartImaginarias}+${resultadoPartImaginariasPuras}i`; }
  if (resultadoPartImaginarias > 0 && resultadoPartImaginariasPuras > 0) { resultado = `${resultadoPartImaginarias}+${resultadoPartImaginariasPuras}i`; }
  return resultado;
}
export { formulasDosNumerosComplexos as Component_math_calculator_exp_calc_numeros_complexos_method }
