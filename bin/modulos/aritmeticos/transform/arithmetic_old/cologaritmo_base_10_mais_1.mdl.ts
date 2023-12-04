import { _logaritmoBase } from "./private/logaritmo.private.mdl"

export var cologaritmoBase10Mais1 = (x: number): number => {
  return (-1 * _logaritmoBase(10, x)) + 1;
};
