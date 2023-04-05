import { WertsfyPrototipos } from "../../.declarations/warch.prototype";

const formulasDeCalculoDeMatrizes = (tipo: WertsfyPrototipos.Logicos.Core["TExpressoes"]["operacoesComuns"], matriz: { m1: number[][], m2: number[][] }): number[][] => {
  let resultado: number[][];
  for (let i = 0; i < matriz.m1.length; i++) {
    resultado[i] = [];
    for (let j = 0; j < matriz.m1[i].length; j++) {
      switch(tipo) {
        case "#plus":
          resultado[i][j] = matriz.m1[i][j] + matriz.m2[i][j]; break;
        case "#minus":
          resultado[i][j] = matriz.m1[i][j] - matriz.m2[i][j]; break;
        case "#multip":
          if(matriz.m1[0][j] != matriz.m2[i][j]){ new Error("Calc Error"); }
          resultado[i][j] = matriz.m1[i][j] * matriz.m2[i][j]; break;
        case "#divisor":
          resultado[i][j] = matriz.m1[i][j] / matriz.m2[i][j]; break;
      }
    }
  }
  return resultado;
}
export { formulasDeCalculoDeMatrizes as Component_math_calculator_exp_calc_matrizes_method }
