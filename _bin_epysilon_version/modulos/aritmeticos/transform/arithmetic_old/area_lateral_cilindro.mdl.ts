import { Aritmeticos } from "../../arithmetic.lib";

export var areaLateralCilindro = (raio: number, altura: number): number => {
  return  2 * Aritmeticos.Consts.c_pi * raio * altura;  
};
