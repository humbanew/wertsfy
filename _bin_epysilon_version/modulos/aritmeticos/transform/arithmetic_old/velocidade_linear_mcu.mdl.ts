import { Aritmeticos } from "../../arithmetic.lib";

export var velocidadeLinearMCU = (frequencia: number, raio: number): number => {
  let resultado = (2 * Aritmeticos.Consts.c_pi * frequencia) * raio;
  return resultado;
};
