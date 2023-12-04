import { cosseno } from "./cosseno.mdl";
import { seno } from "./seno.mdl";

export var cotangenteHiperbolica = (x: number): number => {
  return 1 / (1 / (cosseno(x) / seno(x)));  
};
