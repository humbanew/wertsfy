import { seno } from "./seno.mdl";

export var cosecanteHiperbolica = (x: number): number => {
  return 1 / (1 / seno(x));  
};
