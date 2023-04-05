const formulaRegraDeTresComposta = (valor1: number, valor2: number, valor3: number, valor4: number, valor5: number, valor6: number, valor7: number, localDaVariavel: string = ("A" || "B" || "C" || "D" || "E" || "F" || "G")): number => {
  if (localDaVariavel == "a") { localDaVariavel = "A"; }
  if (localDaVariavel == "b") { localDaVariavel = "B"; }
  if (localDaVariavel == "c") { localDaVariavel = "C"; }
  if (localDaVariavel == "d") { localDaVariavel = "D"; }
  if (localDaVariavel == "e") { localDaVariavel = "E"; }
  if (localDaVariavel == "f") { localDaVariavel = "F"; }
  if (localDaVariavel == "g") { localDaVariavel = "G"; }
  let resultado = 0;
  switch (localDaVariavel) {
    case "A": resultado = valor1 * valor2 / valor3; break;
    case "B": resultado = valor1 * valor3 / valor2; break;
    case "C": resultado = valor2 * valor3 / valor1; break;
    case "D": resultado = valor4 * valor5 / valor6; break;
    case "E": resultado = valor4 * valor6 / valor5; break;
    case "F": resultado = valor5 * valor6 / valor4; break;
    case "G": resultado = valor7 * valor5 / valor6; break;
  }
  return resultado;
}
export { formulaRegraDeTresComposta as Component_math_calculator_exp_calc_regra_de_tres_composta_method }
