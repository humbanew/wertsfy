import { Aritmeticos } from "../../arithmetic.lib";

export var areaCirculo = (raio: number): number => { 
  return Aritmeticos.Consts.c_pi * (raio ** 2);
};
