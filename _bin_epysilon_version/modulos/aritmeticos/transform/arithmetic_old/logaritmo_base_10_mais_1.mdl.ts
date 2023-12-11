import { _logaritmoBase } from "./private/logaritmo.private.mdl";

export var logaritmoBase10Mais1 = (x: number): number => {
  return _logaritmoBase(10, x+1);
};
