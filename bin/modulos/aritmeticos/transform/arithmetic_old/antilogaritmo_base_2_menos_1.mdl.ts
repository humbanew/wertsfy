import { _logaritmoBase } from "./private/logaritmo.private.mdl";

export var antilogaritmoBase2Menos1 = (x: number): number => {
  return (1 ** _logaritmoBase(2, x)) - 1;
};
