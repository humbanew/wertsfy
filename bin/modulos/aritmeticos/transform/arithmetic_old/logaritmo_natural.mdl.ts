import { Aritmeticos } from "../../arithmetic.lib";
import { _logaritmoBase } from "./private/logaritmo.private.mdl";

export var logaritmoNatural = (x: number): number => { 
  return _logaritmoBase(Aritmeticos.Consts.c_euler, x);
};
