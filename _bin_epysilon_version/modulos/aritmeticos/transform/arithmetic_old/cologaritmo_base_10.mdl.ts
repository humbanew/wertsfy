import { _logaritmoBase } from "./private/logaritmo.private.mdl"

export var cologaritmoBase10 = (x: number): number => {
  return -1 * _logaritmoBase(10, x);
};
