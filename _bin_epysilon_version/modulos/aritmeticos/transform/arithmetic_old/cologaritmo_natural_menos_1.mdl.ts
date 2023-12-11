import { Aritmeticos } from "../../arithmetic.lib";
import { _logaritmoBase } from "./private/logaritmo.private.mdl"

export var cologaritmoNaturalMenos1 = (x: number): number => {
  return (-1 * _logaritmoBase(Aritmeticos.Consts.c_euler, x)) - 1;
};
