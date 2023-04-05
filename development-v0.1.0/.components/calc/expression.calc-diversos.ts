import { WertsfyPrototipos } from "../../.declarations/warch.prototype";

const calculoDiversos = (tipo: WertsfyPrototipos.Logicos.Core["TExpressoes"]["operacoesDiversos"]): number => {

  let resultado = 0, attrs = undefined;
  
  switch(tipo[0]) {
    case "#escalaGeografica":
      attrs = tipo[1];
      resultado = attrs.tamanhoReal / attrs.tamanhoFicticio; break;
    case "#idh":
      attrs = tipo[1];
      resultado = (attrs.saude + attrs.educacao + attrs.renda) / (attrs.populacao + attrs.ppc); break;
    case "#gini":
      attrs = tipo[1];
      resultado = attrs.pnb / attrs.populacao; break;
    case "#imc":
      attrs = tipo[1];
      resultado = attrs.peso / attrs.altura ** 2; break;
    case "#densidadePopulacional":
      attrs = tipo[1];
      resultado = attrs.espaco / attrs.populacao; break;
  }

  return resultado;

}; export { calculoDiversos as Component_math_calculator_exp_calc_diversos_method };
