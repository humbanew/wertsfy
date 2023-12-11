import { Aritmeticos } from "../../arithmetic.lib";
import { _logaritmoBase } from "./private/logaritmo.private.mdl";

export var logaritmoNaturalMais1 = (x: number): number => {
  return _logaritmoBase(Aritmeticos.Consts.c_euler, x+1);
};
