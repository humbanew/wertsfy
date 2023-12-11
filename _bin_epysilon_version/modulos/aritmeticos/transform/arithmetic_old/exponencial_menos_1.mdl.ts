import { logaritmoBaseQualquer } from "./logaritmo_base_qualquer.mdl";

export var exponencialMenos1 = (base: number, x: number): number => {
  if(base == 0) { return 1; }
  return (base ** logaritmoBaseQualquer(x, base)) - 1;
};
