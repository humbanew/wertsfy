export var teoremaDeGirard = (expressao: string): number[]|string[]|void => {
  let resultado: any, valores: any;
  let verificacao = /(([0-9]+(\.[0-9]+)?)([a-zA-Z])?([0-9])?)((\+)?(\-)?)/gi;
  let pegaTermosComIcognita = /([0-9]+(\.[0-9]+)?)([a-zA-Z])/gi;
  let pegaTermosSemIcognita = /([0-9]+(\.[0-9]+)?)(\=)/gi;
  let valoresConvertidos: any;
  if (verificacao == null) { return console.error("Expressão Adicionada é Inválida ou está incorreta!"); }
  valores.push(expressao.match(pegaTermosComIcognita));
  if(expressao.match(pegaTermosSemIcognita) != null) { valores.push(expressao.match(pegaTermosSemIcognita)); }
  for (let i = 0; i < valores[0].length; i++) {
    valores[0][i] = parseFloat(valores[0][i]);
    valoresConvertidos.push(valores[0][i]);
  }
  valores[1] = parseFloat(valores[1]);
  valoresConvertidos.push(valores[1]);
  for (let i = 1; i <= valoresConvertidos.length - 1; i++) {
    let verificadorSinal = i % 2;
    if (verificadorSinal == 0) { resultado.push(valoresConvertidos[i] / valoresConvertidos[0]); }
    if (verificadorSinal == 1) { resultado.push(-1 * (valoresConvertidos[i] / valoresConvertidos[0])); }
  }
  return resultado;
};
