import { Aritmeticos } from "../../arithmetic.lib";

export var arcoSenoHiperbolico = (x: number): number => {
  return 1 / (((2 * Aritmeticos.Consts.c_pi * 1) / 4) / 90) * x;
};
