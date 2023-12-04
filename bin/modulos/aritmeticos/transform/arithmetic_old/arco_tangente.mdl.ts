import { arcoCosseno } from "./arco_cosseno.mdl";
import { arcoSeno } from "./arco_seno.mdl";

export var arcoTangente = (x: number): number => {
  return arcoSeno(x) / arcoCosseno(x);
};
