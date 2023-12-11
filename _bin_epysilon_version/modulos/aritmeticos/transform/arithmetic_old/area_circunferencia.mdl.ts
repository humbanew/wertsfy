import { Aritmeticos } from "../../arithmetic.lib";

export var areaCircunferencia = (raio: number): number => {
  return Aritmeticos.Consts.c_pi * (raio * 2);
};
