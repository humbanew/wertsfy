import { _logaritmoBase } from "./private/logaritmo.private.mdl";

export var logaritmoBaseQualquerMenos1 = (base: number, x: number) => {
  return _logaritmoBase(base, x-1);
};
