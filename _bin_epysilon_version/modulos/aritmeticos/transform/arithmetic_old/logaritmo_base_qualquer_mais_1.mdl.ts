import { _logaritmoBase } from "./private/logaritmo.private.mdl";

export var logaritmoBaseQualquerMais1 = (base: number, x: number): number => {
  return _logaritmoBase(base, x+1);
};
