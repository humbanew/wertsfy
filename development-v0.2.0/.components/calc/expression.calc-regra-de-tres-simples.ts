const formulaCalculoDaRegraDeTresSimples = (valor1: number, valor2: number, valor3: number, localDaVariavel: string = ("A" || "B" || "C")): number => {
  if (localDaVariavel == "a") { localDaVariavel = "A"; }
  if (localDaVariavel == "b") { localDaVariavel = "B"; }
  if (localDaVariavel == "c") { localDaVariavel = "C"; }
  let resultado = 0;
  switch (localDaVariavel) {
    case "A": resultado = valor1 * valor2 / valor3; break;
    case "B": resultado = valor1 * valor3 / valor2; break;
    case "C": resultado = valor2 * valor3 / valor1; break;
  }
  return resultado;
}
export { formulaCalculoDaRegraDeTresSimples as Component_math_calculator_exp_calc_regra_de_tres_simples_method }
