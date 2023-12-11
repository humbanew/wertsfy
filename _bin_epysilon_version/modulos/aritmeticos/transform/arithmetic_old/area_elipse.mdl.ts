import { Aritmeticos } from "../../arithmetic.lib";

export var areaElipse = (raio: number, altura: number): number => { 
  return Aritmeticos.Consts.c_pi * (raio ** 2) * altura;
};
