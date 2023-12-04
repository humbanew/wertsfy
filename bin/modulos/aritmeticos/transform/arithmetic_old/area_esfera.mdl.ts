import { Aritmeticos } from "../../arithmetic.lib";

export var areaEsfera = (raio: number): number => {
  return 4 * Aritmeticos.Consts.c_pi * (raio ** 2) / 2;
};
