import { cosseno } from "./cosseno.mdl"

export var secanteHiperbolica = (x: number): number => {
  return 1 / (1 / cosseno(x)); 
};
