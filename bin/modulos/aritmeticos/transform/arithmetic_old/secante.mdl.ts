import { cosseno } from "./cosseno.mdl";

export var secante = (x: number): number => {
  return 1 / cosseno(x);
};
