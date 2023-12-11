import { cosseno } from "./cosseno.mdl";
import { seno } from "./seno.mdl";

export var tangenteHiperbolica = (x: number): number => {
  return 1 / (seno(x) / cosseno(x));  
};
