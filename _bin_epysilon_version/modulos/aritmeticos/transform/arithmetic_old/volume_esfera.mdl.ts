import { Aritmeticos } from "../../arithmetic.lib";

export var volumeEsfera = (raio: number): number => {
  return (4 * Aritmeticos.Consts.c_pi * (raio ** 3)) / 3;
};
