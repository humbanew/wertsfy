import { logaritmoBaseQualquer } from "./logaritmo_base_qualquer.mdl";

export var exponencial = (base: number, x: number): number => {
  if(base == 0) { return 1; }
  return base ** logaritmoBaseQualquer(x, base);
};
