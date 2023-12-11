import { cosseno } from "./cosseno.mdl";
import { seno } from "./seno.mdl";

export var tangente = (x: number): number => {
  return seno(x) / cosseno(x);  
};
