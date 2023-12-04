export var regraDeTresSimples = (valor1: number, valor2: number, valor3: number, localDavariavel: string = ("A" || "B" || "C")): number => {
  if (localDavariavel == "a") { localDavariavel = "A"; }
  if (localDavariavel == "b") { localDavariavel = "B"; }
  if (localDavariavel == "c") { localDavariavel = "C"; }
  let resultado = 0;
  switch (localDavariavel) {
    case "A": resultado = valor1 * valor2 / valor3; break;
    case "B": resultado = valor1 * valor3 / valor2; break;
    case "C": resultado = valor2 * valor3 / valor1; break;
  }
  return resultado;
};
