const formulaCalculoDeSistemasLineares = (expressoes: string[]): Array<any>|void => {
  let resultado = [], expressaoPartida = [], verificacao = /(((\+)?(\-)?(\=)?)?(\-)?([0-9]+)(\.[0-9]+)?([a-z])?)/gi,
    verificacao2 = /(((\+)?(\-)?)?(\-)?([0-9]+)(\.[0-9]+)?([a-z])?)/gi;
  let somatorio = [], aux = 0, calculo = 0;
  for (let i = 0; i < expressoes.length; i++) {
    if (expressoes[i].match(verificacao) == null) { return console.error("A expressão inserida não é válida!"); }
    expressaoPartida.push(expressoes[i].match(verificacao2));
  }
  for (let i = 0; i < expressaoPartida.length; i++) {
    for (let h = 0; h < expressaoPartida[i].length; h++) {
      expressaoPartida[i][h] = parseFloat(expressaoPartida[i][h]);
    }
  }
  let x = 0;
  while (x != expressaoPartida[0].length) {
    for (let w = 0; w < expressaoPartida.length; w++) {
      calculo = calculo + expressaoPartida[w][x];
    }
    somatorio.push(calculo);
    x++;
  }
  for (let q = 1; q < somatorio.length; q++) {
    if (q % 2 == 0) { resultado.push(somatorio[q] / somatorio[0]); }
    if (q % 2 == 1) { resultado.push((-1 * somatorio[q]) / somatorio[0]); }
  }
  return resultado;
}
export { formulaCalculoDeSistemasLineares as Component_math_calculator_exp_calc_sistemas_lineares_method }
