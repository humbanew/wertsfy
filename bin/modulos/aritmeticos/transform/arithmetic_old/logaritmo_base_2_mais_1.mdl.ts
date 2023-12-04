import { _logaritmoBase } from "./private/logaritmo.private.mdl";

export var logaritmoBase2Mais1 = (x: number): number => {
  return _logaritmoBase(2, x+1);
};
