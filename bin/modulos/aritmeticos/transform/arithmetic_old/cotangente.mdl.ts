import { cosseno } from "./cosseno.mdl";
import { seno } from "./seno.mdl";

export var cotangente = (x: number): number => {
  return 1 / (cosseno(x) / seno(x));
};
